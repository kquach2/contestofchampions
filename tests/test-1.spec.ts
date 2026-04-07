import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'iOS' }).click();
  await expect(page.getByTestId('default-page-container')).toContainText('Marvel Contest of Champions');
});

test("check for broken images", async ({ page }) => {
    // await page.goto("https://with-bugs.practicesoftwaretesting.com/");

    const brokenImages = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("img"))
        .filter((img) => img.naturalWidth === 0 || img.naturalHeight === 0)
        .map((img) => img.src);
    });
    expect(
      brokenImages.length,
      `Broken Images: ${brokenImages.toString()}`
    ).toBe(0);
  });