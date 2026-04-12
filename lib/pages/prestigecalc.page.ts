import { type Locator, type Page } from "@playwright/test";

export class PrestigeCalcPage {
  readonly page: Page;
  readonly championName: Locator;
  readonly championRank: Locator;
  readonly championTier: Locator;
  readonly championSigLevel: Locator;
  readonly prestige: Locator;
  readonly deleteAllButton: Locator;
  readonly championSelector: Locator;

  constructor(page: Page) {
    this.page = page;
    this.championName = page.locator(
      ".champion-selector-display.rpg-champions-text.brackets.XS",
    );
    this.championTier = page.locator(".rpg-dropdown.champion-selector-tier");
    this.championRank = page.locator(".rpg-dropdown.champion-selector-rank");
    this.championSigLevel = page.locator(
      ".rpg-dropdown.champion-selector-level",
    );
    this.prestige = page
      .getByText("YOUR PRESTIGE IS")
      .locator("..")
      .getByRole("heading");
    this.deleteAllButton = page.locator(".rpg-champions-text.button-delete.XS");
    this.championSelector = page.locator(".champion-selector-panel.show");
  }

  async goto() {
    await this.page.goto("/academy/prestige-calculator/");
  }

  async fillChampion(
    position: number,
    name: string,
    tier: string,
    rank: string,
    sigLevel: string,
  ) {
    await this.championName.nth(position - 1).click();
    await this.championSelector
      .getByText(name, { exact: true })
      .locator("..")
      .locator("..")
      .click();
    await this.championTier
      .nth(position - 1)
      .getByRole("combobox")
      .selectOption(tier);
    await this.championRank
      .nth(position - 1)
      .getByRole("combobox")
      .selectOption(rank);
    await this.championSigLevel
      .nth(position - 1)
      .getByRole("combobox")
      .selectOption(sigLevel);
  }
}
