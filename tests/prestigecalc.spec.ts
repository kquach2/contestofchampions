import { test } from "@fixtures/pages.fixtures";
import { expect } from "@playwright/test";
test.describe("Prestige Calculator Page", () => {
  test("Check that prestige is calculated properly and calculator can be cleared", async ({
    page,
    prestigeCalcPage,
  }) => {
    await prestigeCalcPage.goto();
    await test.step("Input information for champions 1-30", async () => {
      await prestigeCalcPage.fillChampion(1, "KINDRED", "7", "4", "200");
      await prestigeCalcPage.fillChampion(2, "ONSLAUGHT", "7", "4", "200");
      await prestigeCalcPage.fillChampion(3, "THE SERPENT", "7", "4", "200");
      await prestigeCalcPage.fillChampion(4, "PHOTON", "7", "4", "200");
      await prestigeCalcPage.fillChampion(5, "JEAN GREY", "7", "4", "200");
      await prestigeCalcPage.fillChampion(
        6,
        "THANOS (DEATHLESS)",
        "7",
        "4",
        "200",
      );
      await prestigeCalcPage.fillChampion(
        7,
        "SPIDER-WOMAN (JESSICA DREW)",
        "7",
        "4",
        "200",
      );
      await prestigeCalcPage.fillChampion(8, "BASTION", "7", "4", "200");
      await prestigeCalcPage.fillChampion(9, "ABSORBING MAN", "7", "4", "200");
      await prestigeCalcPage.fillChampion(
        10,
        "ANT-MAN (FUTURE)",
        "7",
        "4",
        "200",
      );
      await prestigeCalcPage.fillChampion(11, "HULKLING", "7", "4", "200");
      await prestigeCalcPage.fillChampion(12, "CROSSBONES", "7", "4", "200");
      await prestigeCalcPage.fillChampion(
        13,
        "MISTER SINISTER",
        "7",
        "4",
        "200",
      );
      await prestigeCalcPage.fillChampion(14, "SHOCKER", "7", "4", "200");
      await prestigeCalcPage.fillChampion(15, "KUSHALA", "7", "4", "200");
      await prestigeCalcPage.fillChampion(16, "CULL OBSIDIAN", "7", "4", "200");
      await prestigeCalcPage.fillChampion(
        17,
        "SPIDER-MAN (STARK ENHANCED)",
        "7",
        "4",
        "200",
      );
      await prestigeCalcPage.fillChampion(18, "COUNT NEFARIA", "7", "3", "200");
      await prestigeCalcPage.fillChampion(19, "ENCHANTRESS", "7", "3", "100");
      await prestigeCalcPage.fillChampion(20, "BULLSEYE", "7", "4", "60");
      await prestigeCalcPage.fillChampion(21, "CHEE'ILTH", "7", "4", "60");
      await prestigeCalcPage.fillChampion(
        22,
        "CAPTAIN BRITAIN",
        "7",
        "4",
        "60",
      );
      await prestigeCalcPage.fillChampion(23, "SILK", "7", "4", "60");
      await prestigeCalcPage.fillChampion(24, "KAROLINA DEAN", "7", "4", "40");
      await prestigeCalcPage.fillChampion(25, "NICO MINORU", "7", "4", "160");
      await prestigeCalcPage.fillChampion(26, "OKOYE", "7", "4", "20");
      await prestigeCalcPage.fillChampion(
        27,
        "DEADPOOL (X-FORCE)",
        "7",
        "4",
        "20",
      );
      await prestigeCalcPage.fillChampion(28, "SCORPION", "7", "4", "10");
      await prestigeCalcPage.fillChampion(29, "SPIDER-HAM", "7", "3", "100");
      await prestigeCalcPage.fillChampion(30, "NIMROD", "7", "4", "200");
      await expect(prestigeCalcPage.prestige).toContainText("31071");
    });
    await test.step("Clear calculator", async () => {
      await prestigeCalcPage.deleteAllButton.click();
      await expect(prestigeCalcPage.prestige).toContainText("0");
    });
  });
});
