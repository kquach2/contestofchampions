import { type Locator, type Page } from "@playwright/test";

export class GlossaryPage {
  readonly page: Page;
  readonly glossary: Locator;
  readonly tableOfContents: Locator;

  constructor(page: Page) {
    this.page = page;
    this.glossary = page.locator(".view-body");
    this.tableOfContents = page
      .getByRole("heading", { name: "TABLE OF CONTENTS" })
      .locator("..")
      .getByRole("list");
  }

  async goto() {
    await this.page.goto("/academy/glossary/");
  }
}
