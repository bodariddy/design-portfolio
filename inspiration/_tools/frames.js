// Usage: node inspiration/_tools/frames.js <url> <slug> [theme]
// Saves: load-0..N.png (timed frames during page load, to show loaders/intro animation)
//        scroll-00..NN.png (viewport frames down the page), for sites too tall or WebGL-heavy for full-page shots
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const [url, slug, theme = 'dark'] = process.argv.slice(2);
const dir = path.join(__dirname, '..', slug, 'frames'); fs.mkdirSync(dir, { recursive: true });
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, colorScheme: theme });
  p.goto(url, { timeout: 60000 }).catch(() => {});
  const times = [300, 800, 1500, 2500, 4000, 6000];
  let last = 0;
  for (const [i, t] of times.entries()) { await p.waitForTimeout(t - last); last = t; await p.screenshot({ path: `${dir}/load-${i}.png` }).catch(() => {}); }
  await p.waitForLoadState('networkidle').catch(() => {});
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  let i = 0;
  for (let y = 0; y < Math.min(H, 900 * 14); y += 900) {
    await p.mouse.wheel(0, i ? 900 : 0); await p.waitForTimeout(1300);
    await p.screenshot({ path: `${dir}/scroll-${String(i++).padStart(2, '0')}.png` }).catch(() => {});
  }
  console.log(slug, 'height', H, 'frames', i);
  await b.close();
})();
