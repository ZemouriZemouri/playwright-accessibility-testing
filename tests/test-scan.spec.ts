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
    await page.locator('#mx_form_0 div').waitFor();
    // await page.locator('#mx_form_0 div').filter({ hasText: 'Versturen' }).click();
 
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#mx_form_0 div')
      .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });