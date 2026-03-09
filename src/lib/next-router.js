'use client';

import NextLink from 'next/link';
import { usePathname, useParams, useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Link({ to, href, replace, ...rest }) {
  return <NextLink href={href ?? to ?? '#'} replace={replace} {...rest} />;
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname: pathname ?? '/', search: '', hash: '' };
}

export { useParams, useSearchParams, useRouter };

export function useNavigate() {
  const router = useRouter();
  return (to, options) => {
    if (options?.replace) return router.replace(to);
    return router.push(to);
  };
}

export function Navigate({ to, replace = false }) {
  const router = useRouter();
  useEffect(() => {
    (replace ? router.replace : router.push)(to);
  }, [to, replace, router]);
  return null;
}
