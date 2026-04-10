import { PrestigeCalcPage } from "@pages/prestigecalc.page";
import { test, expect } from "@playwright/test";
test.describe("Prestige Calculator Page", () => {
  test("Check that prestige is calculated properly and calculator can be cleared", async ({
    page,
  }) => {
    const prestigeCalcPage = new PrestigeCalcPage(page);
    await prestigeCalcPage.goto();
    await test.step("Input information for champions 1-30", async () => {
      await prestigeCalcPage.champion1Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mystic$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^KINDRED$/ })
        .first()
        .click();
      await prestigeCalcPage.champion1Rank.selectOption("4");
      await prestigeCalcPage.champion1SigLevel.selectOption("200");
      await prestigeCalcPage.champion2Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mutant$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^ONSLAUGHT$/ })
        .first()
        .click();
      await prestigeCalcPage.champion2Rank.selectOption("4");
      await prestigeCalcPage.champion2SigLevel.selectOption("200");
      await prestigeCalcPage.champion3Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Cosmic$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^THE SERPENT$/ })
        .first()
        .click();
      await prestigeCalcPage.champion3Rank.selectOption("4");
      await prestigeCalcPage.champion3SigLevel.selectOption("200");
      await prestigeCalcPage.champion4Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Science$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^PHOTON$/ })
        .first()
        .click();
      await prestigeCalcPage.champion4Rank.selectOption("4");
      await prestigeCalcPage.champion4SigLevel.selectOption("200");
      await prestigeCalcPage.champion5Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mutant$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^JEAN GREY$/ })
        .nth(2)
        .click();
      await prestigeCalcPage.champion5Rank.selectOption("4");
      await prestigeCalcPage.champion5SigLevel.selectOption("200");
      await prestigeCalcPage.champion6Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Cosmic$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^THANOS \(DEATHLESS\)$/ })
        .nth(2)
        .click();
      await prestigeCalcPage.champion6Rank.selectOption("4");
      await prestigeCalcPage.champion6SigLevel.selectOption("200");
      await prestigeCalcPage.champion7Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Science$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^SPIDER-WOMAN \(JESSICA DREW\)$/ })
        .nth(2)
        .click();
      await prestigeCalcPage.champion7Rank.selectOption("4");
      await prestigeCalcPage.champion7SigLevel.selectOption("200");
      await prestigeCalcPage.champion8Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Tech$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^BASTION$/ })
        .first()
        .click();
      await prestigeCalcPage.champion8Rank.selectOption("4");
      await prestigeCalcPage.champion8SigLevel.selectOption("200");
      await prestigeCalcPage.champion9Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mystic$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^ABSORBING MAN$/ })
        .nth(2)
        .click();
      await prestigeCalcPage.champion9Rank.selectOption("4");
      await prestigeCalcPage.champion9SigLevel.selectOption("200");
      await prestigeCalcPage.champion10Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Tech$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^ANT-MAN \(FUTURE\)$/ })
        .nth(2)
        .click();
      await prestigeCalcPage.champion10Rank.selectOption("4");
      await prestigeCalcPage.champion10SigLevel.selectOption("200");
      await prestigeCalcPage.champion11Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Tech$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^NIMROD$/ })
        .nth(4)
        .click();
      await prestigeCalcPage.champion11Rank.selectOption("4");
      await prestigeCalcPage.champion11SigLevel.selectOption("200");
      await prestigeCalcPage.champion12Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Cosmic$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^HULKLING$/ })
        .nth(4)
        .click();
      await prestigeCalcPage.champion12Rank.selectOption("4");
      await prestigeCalcPage.champion12SigLevel.selectOption("200");
      await prestigeCalcPage.champion13Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Tech$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(38) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion13Rank.selectOption("4");
      await prestigeCalcPage.champion13SigLevel.selectOption("200");
      await prestigeCalcPage.champion14Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Skill$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^CROSSBONES$/ })
        .first()
        .click();
      await prestigeCalcPage.champion14Rank.selectOption("4");
      await prestigeCalcPage.champion14SigLevel.selectOption("200");
      await prestigeCalcPage.champion15Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mutant$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^MISTER SINISTER$/ })
        .nth(4)
        .click();
      await prestigeCalcPage.champion15Rank.selectOption("4");
      await prestigeCalcPage.champion15SigLevel.selectOption("200");
      await prestigeCalcPage.champion16Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Cosmic$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(13) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion16Rank.selectOption("4");
      await prestigeCalcPage.champion16SigLevel.selectOption("200");
      await prestigeCalcPage.champion17Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mystic$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^NICO MINORU$/ })
        .nth(4)
        .click();
      await prestigeCalcPage.champion17Rank.selectOption("4");
      await prestigeCalcPage.champion17SigLevel.selectOption("200");
      await prestigeCalcPage.champion18Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mystic$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(24) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion18Rank.selectOption("4");
      await prestigeCalcPage.champion18SigLevel.selectOption("200");
      await prestigeCalcPage.champion19Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Tech$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(42) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion19Rank.selectOption("4");
      await prestigeCalcPage.champion19SigLevel.selectOption("200");
      await prestigeCalcPage.champion20Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Skill$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^BULLSEYE$/ })
        .nth(2)
        .click();
      await prestigeCalcPage.champion20Rank.selectOption("4");
      await prestigeCalcPage.champion20SigLevel.selectOption("60");
      await prestigeCalcPage.champion21Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Skill$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^CHEE'ILTH$/ })
        .nth(4)
        .click();
      await prestigeCalcPage.champion21Rank.selectOption("4");
      await prestigeCalcPage.champion21SigLevel.selectOption("60");
      await prestigeCalcPage.champion22Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mutant$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(7) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion22Rank.selectOption("4");
      await prestigeCalcPage.champion22SigLevel.selectOption("60");
      await prestigeCalcPage.champion23Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Cosmic$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(30) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion23Rank.selectOption("4");
      await prestigeCalcPage.champion23SigLevel.selectOption("40");
      await prestigeCalcPage.champion24Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mutant$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(15) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion24Rank.selectOption("4");
      await prestigeCalcPage.champion24SigLevel.selectOption("40");
      await prestigeCalcPage.champion25Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Science$/ })
        .click();
      await page
        .locator("div")
        .filter({ hasText: /^SILK$/ })
        .nth(4)
        .click();
      await prestigeCalcPage.champion25Rank.selectOption("4");
      await prestigeCalcPage.champion25SigLevel.selectOption("40");
      await prestigeCalcPage.champion26Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Skill$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(43) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion26Rank.selectOption("4");
      await prestigeCalcPage.champion26SigLevel.selectOption("20");
      await prestigeCalcPage.champion27Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Science$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(11) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion27Rank.selectOption("3");
      await prestigeCalcPage.champion27SigLevel.selectOption("200");
      await prestigeCalcPage.champion28Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Science$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(37) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion28Rank.selectOption("4");
      await prestigeCalcPage.champion28SigLevel.selectOption("10");
      await prestigeCalcPage.champion29Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Cosmic$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(35) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion29Rank.selectOption("3");
      await prestigeCalcPage.champion29SigLevel.selectOption("110");
      await prestigeCalcPage.champion30Name.click();
      await page
        .getByRole("listitem")
        .filter({ hasText: /^Mystic$/ })
        .click();
      await page
        .locator(
          ".champion-selector-panel.show > .champion-selector-list > .list-champions > li:nth-child(14) > .rpg-champion-tile",
        )
        .click();
      await prestigeCalcPage.champion30Rank.selectOption("3");
      await prestigeCalcPage.champion30SigLevel.selectOption("100");
      await expect(prestigeCalcPage.prestige).toContainText("31128");
    });
    await test.step("Clear calculator", async () => {
      await prestigeCalcPage.deleteAllButton.click();
      await expect(prestigeCalcPage.prestige).toContainText("0");
    });
  });
});
