import { ChampionsPage } from "@pages/champions.page";
import { GlossaryPage } from "@pages/glossary.page";
import { PrestigeCalcPage } from "@pages/prestigecalc.page";
import { test as baseTest } from "@playwright/test";

type MyPages = {
  championsPage: ChampionsPage;
  glossaryPage: GlossaryPage;
  prestigeCalcPage: PrestigeCalcPage;
};

export const test = baseTest.extend<MyPages>({
  championsPage: async ({ page }, use) => {
    await use(new ChampionsPage(page));
  },
  glossaryPage: async ({ page }, use) => {
    await use(new GlossaryPage(page));
  },
  prestigeCalcPage: async ({ page }, use) => {
    await use(new PrestigeCalcPage(page));
  },
});
