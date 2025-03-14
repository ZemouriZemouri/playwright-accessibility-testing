import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('navigation menu flyout should not have automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('https://www.qualityaccelerators.nl/');
  
    await page.getByRole('button',{ name: 'confira aqui - Renegociação. Conte com o Itaú' }).click();
  
    // It is important to waitFor() the page to be in the desired
    // state *before* running analyze(). Otherwise, axe might not
    // find all the elements your test expects it to scan.
    await page.locator('#section-3 > div > div.cards_mosaic-cards > div.cm_card-mosaic-one.right > div > div > div.cm_card-mosaic-one-content.card-mosaic-mobile-right > div > a').waitFor();
  
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#section-3 > div > div.cards_mosaic-cards > div.cm_card-mosaic-one.right > div > div > div.cm_card-mosaic-one-content.card-mosaic-mobile-right > div > a')
      .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });