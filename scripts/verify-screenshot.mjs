import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Take screenshot of home page with closed navbar
  await page.screenshot({ path: 'public/assets/aistudio/test-home-closed.png', animations: 'disabled' });
  console.log('Captured test-home-closed.png');

  // Click Solutions to open mega-menu
  await page.click("button:has-text('Solutions')");
  await page.waitForTimeout(600);

  // Take screenshot of open mega menu
  await page.screenshot({ path: 'public/assets/aistudio/test-mega-menu-solutions.png', animations: 'disabled' });
  console.log('Captured test-mega-menu-solutions.png');

  // Click Plans & Services
  await page.click("button:has-text('Plans & Services')");
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'public/assets/aistudio/test-mega-menu-plans.png', animations: 'disabled' });
  console.log('Captured test-mega-menu-plans.png');

  // Go to pricing page
  await page.goto('http://localhost:3000/plans-services/pricing', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'public/assets/aistudio/test-pricing-page.png', animations: 'disabled' });
  console.log('Captured test-pricing-page.png');

  // Go to solutions overview page
  await page.goto('http://localhost:3000/solutions', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'public/assets/aistudio/test-solutions-page.png', animations: 'disabled' });
  console.log('Captured test-solutions-page.png');

  await browser.close();
  console.log('All verification screenshots captured successfully!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
