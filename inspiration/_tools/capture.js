// Usage: node inspiration/_tools/capture.js <url> <slug>
// Saves desktop + mobile screenshots, a hero crop, and design tokens (fonts, colours) to inspiration/<slug>/
const { chromium, devices } = require('playwright');
const fs = require('fs'); const path = require('path');
const [url, slug] = process.argv.slice(2);
if (!url || !slug) { console.error('usage: capture.js <url> <slug>'); process.exit(1); }
const dir = path.join(__dirname, '..', slug); fs.mkdirSync(dir, { recursive: true });
const scroll = p => p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
(async () => {
  const b = await chromium.launch();
  const d = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await d.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => console.warn('nav:', e.message));
  await scroll(d); await d.waitForTimeout(1200);
  await d.screenshot({ path: `${dir}/hero.png` });
  await d.screenshot({ path: `${dir}/desktop-full.png`, fullPage: true });
  const tokens = await d.evaluate(() => {
    const els = [...document.querySelectorAll('h1,h2,h3,p,a,button,span,li')].slice(0, 600);
    const count = (arr) => Object.entries(arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {})).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const cs = els.map(e => getComputedStyle(e));
    const h1 = document.querySelector('h1'); const h1s = h1 && getComputedStyle(h1);
    return {
      title: document.title,
      fonts: count(cs.map(s => s.fontFamily.split(',')[0].replace(/"/g, ''))),
      textColours: count(cs.map(s => s.color)),
      bg: getComputedStyle(document.body).backgroundColor,
      h1: h1 && { text: h1.innerText.slice(0, 140), size: h1s.fontSize, weight: h1s.fontWeight, lh: h1s.lineHeight, ls: h1s.letterSpacing },
      sections: [...document.querySelectorAll('h1,h2')].map(h => h.innerText.trim().slice(0, 80)).filter(Boolean).slice(0, 25),
    };
  });
  const m = await b.newPage({ ...devices['iPhone 14'] });
  await m.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await scroll(m); await m.waitForTimeout(800);
  await m.screenshot({ path: `${dir}/mobile-full.png`, fullPage: true });
  fs.writeFileSync(`${dir}/tokens.json`, JSON.stringify({ url, captured: new Date().toISOString(), ...tokens }, null, 2));
  console.log(JSON.stringify(tokens, null, 2));
  await b.close();
})();
