import { type Locator, type Page } from "@playwright/test";

export class ChampionsPage {
  readonly page: Page;
  readonly championTiles: Locator;
  readonly cosmicFilter: Locator;
  readonly techFilter: Locator;
  readonly mutantFilter: Locator;
  readonly skillFilter: Locator;
  readonly scienceFilter: Locator;
  readonly mysticFilter: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.championTiles = page.locator(".champion-tile");
    this.cosmicFilter = page.getByTitle("Cosmic");
    this.techFilter = page.getByTitle("Tech");
    this.mutantFilter = page.getByTitle("Mutant");
    this.skillFilter = page.getByTitle("Skill");
    this.scienceFilter = page.getByTitle("Science");
    this.mysticFilter = page.getByTitle("Mystic");
    this.searchBox = page.locator(
      ".spotlight-filter-title-control > input.XXS",
    );
    this.searchButton = page.locator(".spotlight-filter-title-search");
  }

  async goto() {
    await this.page.goto("/news/category/champion-spotlights/");
  }
}
