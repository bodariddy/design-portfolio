// Renders /cv from the built site to public/Tosin_Lasisi_CV.pdf.
// Usage (from site/): npm run build && npm run cv
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');

(async () => {
  const server = spawn('npx', ['astro', 'preview', '--port', '4399'], { cwd: path.join(__dirname, '..'), stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 3000));
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('http://localhost:4399/cv', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const out = path.join(__dirname, '..', 'public', 'Tosin_Lasisi_CV.pdf');
  await p.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await b.close(); server.kill();
  console.log('wrote', out);
})();
