import { GlossaryPage } from "@pages/glossary.page";
import { test, expect } from "@playwright/test";

test("validate glossary terms are visible in ui from API", async ({ page }) => {
  let glossaryTerms: any;
  let apiUrl = process.env.API_URL;
  await test.step("intercept /glossary", async () => {
    await page.route(apiUrl + "/glossary**", async (route) => {
      const response = await route.fetch();
      glossaryTerms = await response.json();
      route.continue();
    });
  });

  const glossaryPage = new GlossaryPage(page);
  glossaryPage.goto();

  await expect(glossaryPage.tableOfContents).toBeVisible();

  for (const term of glossaryTerms.glossary) {
    const regex = /\[.+?\]/g;
    const stripped = term.word.replaceAll(regex, "");
    await expect(glossaryPage.glossary).toContainText(stripped);
    await expect(glossaryPage.tableOfContents).toContainText(stripped);
  }
});
