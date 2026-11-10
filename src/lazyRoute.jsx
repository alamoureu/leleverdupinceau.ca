import React from 'react';

/**
 * Shared page-module cache for lazy routes.
 *
 * React.lazy still suspends once on first use even when the ESM module is
 * already in the browser cache - that swap replaces prerendered HTML with
 * PageSkeleton (white flash + Safari privacy banner). If we resolve the
 * module into this sync cache before hydrateRoot, RouteComponent renders
 * eagerly and Suspense never fires on first paint.
 */
const cache = new Map();

export function getCachedPageModule(displayName) {
  const value = cache.get(displayName);
  if (!value || typeof value.then === 'function') return null;
  return value;
}

export function ensurePageModule(displayName, importFn) {
  const existing = cache.get(displayName);
  if (existing) {
    return typeof existing.then === 'function'
      ? existing
      : Promise.resolve(existing);
  }

  const promise = importFn()
    .then((mod) => {
      cache.set(displayName, mod);
      return mod;
    })
    .catch((err) => {
      cache.delete(displayName);
      throw err;
    });

  cache.set(displayName, promise);
  return promise;
}

/**
 * Lazy route component with optional eager render from the sync cache.
 * Always resolve to a component with a string displayName so React never
 * hits "Cannot convert object to primitive value" in lazyInitializer.
 */
export function lazyRoute(importFn, displayName) {
  const name = typeof displayName === 'string' ? displayName : 'LazyRoute';

  const Lazy = React.lazy(() =>
    ensurePageModule(name, importFn).then((mod) => {
      const Component = mod?.default;
      const Wrapper = function LazyRouteWrapper(props) {
        if (typeof Component !== 'function') return null;
        return React.createElement(Component, props);
      };
      Wrapper.displayName = name;
      return { default: Wrapper };
    }),
  );

  function RouteComponent(props) {
    const mod = getCachedPageModule(name);
    if (mod?.default) {
      return React.createElement(mod.default, props);
    }
    return React.createElement(Lazy, props);
  }
  RouteComponent.displayName = name;
  RouteComponent.preload = () => ensurePageModule(name, importFn);
  return RouteComponent;
}
