import { chromium } from 'playwright';

const baseUrl = process.env.BASE_URL ?? 'http://localhost:8080';
const outputDir = process.env.OUTPUT_DIR ?? '/output';

const captures = [
  { name: 'home-mobile-390.png', path: '/', viewport: { width: 390, height: 844 } },
  { name: 'home-tablet-768.png', path: '/', viewport: { width: 768, height: 1024 } },
  { name: 'home-desktop-1440.png', path: '/', viewport: { width: 1440, height: 1000 } },
  {
    name: 'service-desktop-1440.png',
    path: '/servicios/electricidad-para-obras-y-refacciones-mendoza/',
    viewport: { width: 1440, height: 1000 },
  },
];

const browser = await chromium.launch({ headless: true });

try {
  for (const capture of captures) {
    const context = await browser.newContext({
      viewport: capture.viewport,
      colorScheme: 'light',
      reducedMotion: 'reduce',
      locale: 'es-AR',
    });
    const page = await context.newPage();

    await page.goto(new URL(capture.path, baseUrl).toString(), {
      waitUntil: 'networkidle',
      timeout: 30_000,
    });

    await page.evaluate(async () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        element.classList.add('is-visible');
      });

      const maxScroll = document.documentElement.scrollHeight;
      for (let position = 0; position < maxScroll; position += 600) {
        window.scrollTo(0, position);
        await new Promise((resolve) => window.setTimeout(resolve, 70));
      }
      window.scrollTo(0, 0);

      const visibleImages = Array.from(document.images).filter((image) => {
        const style = window.getComputedStyle(image);
        return image.offsetParent !== null && style.visibility !== 'hidden' && style.display !== 'none';
      });

      const imageSettled = Promise.all(
        visibleImages.map((image) => {
          if (image.complete) return Promise.resolve();
          return new Promise((resolve) => {
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
          });
        }),
      );

      await Promise.race([
        imageSettled,
        new Promise((resolve) => window.setTimeout(resolve, 4_000)),
      ]);
    });

    await page.waitForTimeout(400);
    await page.screenshot({
      path: `${outputDir}/${capture.name}`,
      fullPage: true,
    });

    await context.close();
  }
} finally {
  await browser.close();
}
