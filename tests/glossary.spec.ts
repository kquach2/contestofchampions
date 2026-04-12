import { expect } from "@playwright/test";
import { test } from "@fixtures/pages.fixtures";

test("validate glossary terms are visible in ui from API", async ({
  page,
  glossaryPage,
}) => {
  let glossaryTerms: any;
  let apiUrl = process.env.API_URL;
  await test.step("intercept /glossary", async () => {
    await page.route(apiUrl + "/glossary**", async (route) => {
      const response = await route.fetch();
      glossaryTerms = await response.json();
      route.continue();
    });
  });

  glossaryPage.goto();

  await expect(glossaryPage.tableOfContents).toBeVisible();

  for (const term of glossaryTerms.glossary) {
    const regex = /\[.+?\]/g;
    const stripped = term.word.replaceAll(regex, "");
    await expect(glossaryPage.glossary).toContainText(stripped);
    await expect(glossaryPage.tableOfContents).toContainText(stripped);
  }
});
