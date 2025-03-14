import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage', () => { 
  test('to verify axe WCAG rules accessibility issues', async ({ page }) => {
    await page.goto('https://www.qualityaccelerators.nl/'); 

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations);
  });

})