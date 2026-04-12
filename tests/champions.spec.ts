import { ChampionsPage } from "@pages/champions.page";
import { test } from "@fixtures/pages.fixtures";
import { expect } from "@playwright/test";
import { decode } from "html-entities";

test("validate champions are visible in ui from API", async ({
  page,
  championsPage,
}) => {
  let champions: any;
  let apiUrl = process.env.API_URL;
  await test.step("intercept /spotlights", async () => {
    await page.route(apiUrl + "/spotlights**", async (route) => {
      const response = await route.fetch();
      champions = await response.json();
      route.continue();
    });
  });

  await championsPage.goto();

  await expect(championsPage.championsGrid).toBeVisible();

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

test.describe("Validate class filters update champions grid appropriately", async () => {
  test("Validate only cosmic champions are in champions grid after selecting cosmic filter", async ({
    championsPage,
  }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.filterByCosmic();

    await expect(championsPage.cosmicFilter).toHaveClass("active");
    const championTiles = await championsPage.championTiles.all();

    for (const championTile of championTiles) {
      await expect(
        championTile.locator(".champion-tile-class.cosmic"),
      ).toHaveCount(1);
    }
  });

  test("Validate only tech champions are in champions grid after selecting tech filter", async ({
    championsPage,
  }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.filterByTech();

    await expect(championsPage.techFilter).toHaveClass("active");
    const championTiles = await championsPage.championTiles.all();

    for (const championTile of championTiles) {
      await expect(
        championTile.locator(".champion-tile-class.tech"),
      ).toHaveCount(1);
    }
  });

  test("Validate only mutant champions are in champions grid after selecting mutant filter", async ({
    championsPage,
  }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.filterByMutant();

    await expect(championsPage.mutantFilter).toHaveClass("active");
    const championTiles = await championsPage.championTiles.all();
    for (const championTile of championTiles) {
      await expect(
        championTile.locator(".champion-tile-class.mutant"),
      ).toHaveCount(1);
    }
  });

  test("Validate only skill champions are in champions grid after selecting skill filter", async ({
    championsPage,
  }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.filterBySkill();

    await expect(championsPage.skillFilter).toBeVisible();
    const championTiles = await championsPage.championTiles.all();
    for (const championTile of championTiles) {
      await expect(
        championTile.locator(".champion-tile-class.skill"),
      ).toHaveCount(1);
    }
  });

  test("Validate only science champions are in champions grid after selecting science filter", async ({
    championsPage,
  }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.filterByScience();

    await expect(championsPage.scienceFilter).toHaveClass("active");
    const championTiles = await championsPage.championTiles.all();
    for (const championTile of championTiles) {
      await expect(
        championTile.locator(".champion-tile-class.science"),
      ).toHaveCount(1);
    }
  });

  test("Validate only mystic champions are in champions grid after selecting mystic filter", async ({
    championsPage,
  }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.filterByMystic();

    await expect(championsPage.mysticFilter).toHaveClass("active");
    const championTiles = await championsPage.championTiles.all();
    for (const championTile of championTiles) {
      await expect(
        championTile.locator(".champion-tile-class.mystic"),
      ).toHaveCount(1);
    }
  });
});

test.describe("Validate search returns the correct results", async () => {
  test("Search for Thor", async ({ championsPage }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.search("Thor");

    await expect(championsPage.championsGrid).toBeVisible();

    const championTiles = await championsPage.championTiles.all();
    await expect(championTiles.length).toBe(3);
    await expect(championTiles[0]).toContainText("Thor (Ragnarok)");
    await expect(championTiles[1]).toContainText("Thor (Jane Foster)");
    await expect(championTiles[2]).toContainText("Thor");
  });
  test("Search for non-existing character", async ({ championsPage }) => {
    await championsPage.goto();
    await expect(championsPage.championsGrid).toBeVisible();

    await championsPage.search("Superman");

    await expect(championsPage.noResultsMessageBox).toContainText(
      "No Champions Found",
    );
  });
});
