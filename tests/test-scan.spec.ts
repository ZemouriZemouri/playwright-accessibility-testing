import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('navigation menu flyout should not have automatically detectable accessibility violations', async ({ page }) => {
    await page.goto('https://www.qualityaccelerators.nl/');
  
    await page.getByText('Contact').click();
	await page.getByRole('textbox', { name: 'Naam (verplicht)' }).click();
	await page.getByRole('textbox', { name: 'Naam (verplicht)' }).fill('Otman');
	await page.getByRole('textbox', { name: 'E-mailadres (verplicht)' }).click();
	await page.getByRole('textbox', { name: 'E-mailadres (verplicht)' }).fill('otman@qualityaccelerators.nl');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).click();
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).fill('Hoi Hoi ! Dit is een Test');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).press('ArrowLeft');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).press('ArrowRight');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).press('ArrowRight');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).press('ArrowRight');
	await page.getByRole('textbox', { name: 'Bericht (verplicht)' }).fill('Hoi Hoi ! Dit is een Test!');
	await page.getByRole('button', { name: 'Versturen' }).click();
  
    // It is important to waitFor() the page to be in the desired
    // state *before* running analyze(). Otherwise, axe might not
    // find all the elements your test expects it to scan.
    await page.locator('#section-3 > div > div.cards_mosaic-cards > div.cm_card-mosaic-one.right > div > div > div.cm_card-mosaic-one-content.card-mosaic-mobile-right > div > a').waitFor();
  
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#section-3 > div > div.cards_mosaic-cards > div.cm_card-mosaic-one.right > div > div > div.cm_card-mosaic-one-content.card-mosaic-mobile-right > div > a')
      .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });