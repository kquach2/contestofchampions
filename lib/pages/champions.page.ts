import { type Locator, type Page } from "@playwright/test";

export class ChampionsPage {
  readonly page: Page;
  readonly championsGrid: Locator;
  readonly championTiles: Locator;
  readonly cosmicFilter: Locator;
  readonly techFilter: Locator;
  readonly mutantFilter: Locator;
  readonly skillFilter: Locator;
  readonly scienceFilter: Locator;
  readonly mysticFilter: Locator;
  readonly championTileClassIcon: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly noResultsMessageBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.championsGrid = page.locator(".news-list.show");
    this.championTiles = page.locator(".champion-tile");
    this.cosmicFilter = page.getByTitle("Cosmic");
    this.techFilter = page.getByTitle("Tech");
    this.mutantFilter = page.getByTitle("Mutant");
    this.skillFilter = page.getByTitle("Skill");
    this.scienceFilter = page.getByTitle("Science");
    this.mysticFilter = page.getByTitle("Mystic");
    this.championTileClassIcon = page.locator(".champion-tile-class");
    this.searchBox = page.locator(
      ".spotlight-filter-title-control > input.XXS",
    );

    this.searchButton = page.locator(".spotlight-filter-title-search");
    this.noResultsMessageBox = page.locator(".news-list-empty.show");
  }

  async goto() {
    await this.page.goto("/news/category/champion-spotlights/");
  }

  async filterByCosmic() {
    await this.cosmicFilter.click();
  }

  async filterByTech() {
    await this.techFilter.click();
  }

  async filterByMutant() {
    await this.mutantFilter.click();
  }

  async filterBySkill() {
    await this.skillFilter.click();
  }

  async filterByScience() {
    await this.scienceFilter.click();
  }

  async filterByMystic() {
    await this.mysticFilter.click();
  }

  async search(name: string) {
    await this.searchBox.fill(name);
    await this.searchButton.click();
  }
}
