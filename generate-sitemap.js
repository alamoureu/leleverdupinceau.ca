const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 0.9 },
  { url: '/soumission', changefreq: 'daily', priority: 1.0 },
  { url: '/services/peinture-interieure', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/peinture-exterieure', changefreq: 'weekly', priority: 0.9 },
  { url: '/emplois', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.6 },
];

const sitemap = new SitemapStream({
  hostname: 'https://www.leleverdupinceau.ca',
});
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap.pipe(writeStream))
  .then(() => console.log('Sitemap created successfully!'))
  .catch((err) => console.error(err));

links.forEach((link) => sitemap.write(link));
sitemap.end();
