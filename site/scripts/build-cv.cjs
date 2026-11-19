// Renders /cv from the built site to public/Tosin_Lasisi_CV.pdf.
// Usage (from site/): npm run build && npm run cv
const { chromium } = require('playwright');
const serve = require('./serve.cjs');
const path = require('path');

(async () => {
  const server = await serve();
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto(server.url + '/cv', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const out = path.join(__dirname, '..', 'public', 'Tosin_Lasisi_CV.pdf');
  await p.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await b.close(); server.close();
  console.log('wrote', out);
})();
