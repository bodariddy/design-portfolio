// Renders /og to public/og.png (1200×630). Usage: npm run build && npm run og
const { chromium } = require('playwright');
const serve = require('./serve.cjs');
const path = require('path');
(async () => {
  const server = await serve();
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto(server.url + '/og', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(__dirname, '..', 'public', 'og.png') });
  await b.close(); server.close(); console.log('wrote og.png');
})();
