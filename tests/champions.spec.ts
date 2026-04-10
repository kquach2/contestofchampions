import { ChampionsPage } from "@pages/champions.page";
import { test, expect } from "@playwright/test";
import { decode } from "html-entities";

test("validate champions are visible in ui from API", async ({ page }) => {
  let champions: any;
  let apiUrl = process.env.API_URL;
  await test.step("intercept /spotlights", async () => {
    await page.route(apiUrl + "/spotlights**", async (route) => {
      const response = await route.fetch();
      champions = await response.json();
      route.continue();
    });
  });

  const championsPage = new ChampionsPage(page);
  await championsPage.goto();

  await expect(page.locator(".news-list.show")).toBeVisible();

  // for (const champion of champions.news) {
  //   console.log(champion.title.rendered);
  //   const plaintext = decode(champion.title.rendered);
  //   await expect(championsPage.championsGrid).toContainText(plaintext);
  // }
  const championTiles = await championsPage.championTiles.all();
  for (let i = 0; i < championTiles.length; i++) {
    const plaintext = decode(champions.news[i].title.rendered);
    await expect(championTiles[i]).toContainText(plaintext);
  }
});

test("Validate only cosmic champions are in champions grid after selecting cosmic filter", async ({
  page,
}) => {
  const championsPage = new ChampionsPage(page);
  await championsPage.goto();
  await expect(page.locator(".news-list.show")).toBeVisible();

  await championsPage.cosmicFilter.click();

  await expect(page.locator("span.active[title='Cosmic']")).toBeVisible();
  const championTiles = await championsPage.championTiles.all();

  for (const championTile of championTiles) {
    await expect(
      championTile.locator(".champion-tile-class.cosmic"),
    ).toHaveCount(1);
  }
});

test("Validate only tech champions are in champions grid after selecting tech filter", async ({
  page,
}) => {
  const championsPage = new ChampionsPage(page);
  await championsPage.goto();
  await expect(page.locator(".news-list.show")).toBeVisible();

  await championsPage.techFilter.click();

  await expect(page.locator("span.active[title='Tech']")).toBeVisible();
  const championTiles = await championsPage.championTiles.all();

  for (const championTile of championTiles) {
    await expect(championTile.locator(".champion-tile-class.tech")).toHaveCount(
      1,
    );
  }
});

test("Validate only mutant champions are in champions grid after selecting mutant filter", async ({
  page,
}) => {
  const championsPage = new ChampionsPage(page);
  await championsPage.goto();
  await expect(page.locator(".news-list.show")).toBeVisible();

  await championsPage.mutantFilter.click();

  await expect(page.locator("span.active[title='Mutant']")).toBeVisible();
  const championTiles = await championsPage.championTiles.all();
  for (const championTile of championTiles) {
    await expect(
      championTile.locator(".champion-tile-class.mutant"),
    ).toHaveCount(1);
  }
});

test("Validate only skill champions are in champions grid after selecting mutant filter", async ({
  page,
}) => {
  const championsPage = new ChampionsPage(page);
  await championsPage.goto();
  await expect(page.locator(".news-list.show")).toBeVisible();

  await championsPage.skillFilter.click();

  await expect(page.locator("span.active[title='Skill']")).toBeVisible();
  const championTiles = await championsPage.championTiles.all();
  for (const championTile of championTiles) {
    await expect(
      championTile.locator(".champion-tile-class.skill"),
    ).toHaveCount(1);
  }
});

test("Search for Thor", async ({ page }) => {
  const championsPage = new ChampionsPage(page);
  await championsPage.goto();
  await expect(page.locator(".news-list.show")).toBeVisible();

  await championsPage.searchBox.fill("Thor");
  await championsPage.searchButton.click();

  await expect(page.locator(".news-list.show")).toBeVisible();

  const championTiles = await championsPage.championTiles.all();
  await expect(championTiles[0]).toContainText("Thor (Ragnarok)");
  await expect(championTiles[1]).toContainText("Thor (Jane Foster)");
  await expect(championTiles[2]).toContainText("Thor");
});
