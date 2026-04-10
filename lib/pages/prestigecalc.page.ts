import { type Locator, type Page } from "@playwright/test";

export class PrestigeCalcPage {
  readonly page: Page;
  readonly champion1Name: Locator;
  readonly champion2Name: Locator;
  readonly champion3Name: Locator;
  readonly champion4Name: Locator;
  readonly champion5Name: Locator;
  readonly champion6Name: Locator;
  readonly champion7Name: Locator;
  readonly champion8Name: Locator;
  readonly champion9Name: Locator;
  readonly champion10Name: Locator;
  readonly champion11Name: Locator;
  readonly champion12Name: Locator;
  readonly champion13Name: Locator;
  readonly champion14Name: Locator;
  readonly champion15Name: Locator;
  readonly champion16Name: Locator;
  readonly champion17Name: Locator;
  readonly champion18Name: Locator;
  readonly champion19Name: Locator;
  readonly champion20Name: Locator;
  readonly champion21Name: Locator;
  readonly champion22Name: Locator;
  readonly champion23Name: Locator;
  readonly champion24Name: Locator;
  readonly champion25Name: Locator;
  readonly champion26Name: Locator;
  readonly champion27Name: Locator;
  readonly champion28Name: Locator;
  readonly champion29Name: Locator;
  readonly champion30Name: Locator;
  readonly champion1Rank: Locator;
  readonly champion2Rank: Locator;
  readonly champion3Rank: Locator;
  readonly champion4Rank: Locator;
  readonly champion5Rank: Locator;
  readonly champion6Rank: Locator;
  readonly champion7Rank: Locator;
  readonly champion8Rank: Locator;
  readonly champion9Rank: Locator;
  readonly champion10Rank: Locator;
  readonly champion11Rank: Locator;
  readonly champion12Rank: Locator;
  readonly champion13Rank: Locator;
  readonly champion14Rank: Locator;
  readonly champion15Rank: Locator;
  readonly champion16Rank: Locator;
  readonly champion17Rank: Locator;
  readonly champion18Rank: Locator;
  readonly champion19Rank: Locator;
  readonly champion20Rank: Locator;
  readonly champion21Rank: Locator;
  readonly champion22Rank: Locator;
  readonly champion23Rank: Locator;
  readonly champion24Rank: Locator;
  readonly champion25Rank: Locator;
  readonly champion26Rank: Locator;
  readonly champion27Rank: Locator;
  readonly champion28Rank: Locator;
  readonly champion29Rank: Locator;
  readonly champion30Rank: Locator;
  readonly champion1SigLevel: Locator;
  readonly champion2SigLevel: Locator;
  readonly champion3SigLevel: Locator;
  readonly champion4SigLevel: Locator;
  readonly champion5SigLevel: Locator;
  readonly champion6SigLevel: Locator;
  readonly champion7SigLevel: Locator;
  readonly champion8SigLevel: Locator;
  readonly champion9SigLevel: Locator;
  readonly champion10SigLevel: Locator;
  readonly champion11SigLevel: Locator;
  readonly champion12SigLevel: Locator;
  readonly champion13SigLevel: Locator;
  readonly champion14SigLevel: Locator;
  readonly champion15SigLevel: Locator;
  readonly champion16SigLevel: Locator;
  readonly champion17SigLevel: Locator;
  readonly champion18SigLevel: Locator;
  readonly champion19SigLevel: Locator;
  readonly champion20SigLevel: Locator;
  readonly champion21SigLevel: Locator;
  readonly champion22SigLevel: Locator;
  readonly champion23SigLevel: Locator;
  readonly champion24SigLevel: Locator;
  readonly champion25SigLevel: Locator;
  readonly champion26SigLevel: Locator;
  readonly champion27SigLevel: Locator;
  readonly champion28SigLevel: Locator;
  readonly champion29SigLevel: Locator;
  readonly champion30SigLevel: Locator;
  readonly prestige: Locator;
  readonly deleteAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.champion1Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(0);
    this.champion2Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(1);
    this.champion3Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(2);
    this.champion4Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(3);
    this.champion5Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(4);
    this.champion6Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(5);
    this.champion7Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(6);
    this.champion8Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(7);
    this.champion9Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(8);
    this.champion10Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(9);
    this.champion11Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(10);
    this.champion12Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(11);
    this.champion13Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(12);
    this.champion14Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(13);
    this.champion15Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(14);
    this.champion16Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(15);
    this.champion17Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(16);
    this.champion18Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(17);
    this.champion19Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(18);
    this.champion20Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(19);
    this.champion21Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(20);
    this.champion22Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(21);
    this.champion23Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(22);
    this.champion24Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(23);
    this.champion25Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(24);
    this.champion26Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(25);
    this.champion27Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(26);
    this.champion28Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(27);
    this.champion29Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(28);
    this.champion30Name = page
      .locator(".champion-selector-display.rpg-champions-text.brackets.XS")
      .nth(29);
    this.champion1Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(0)
      .getByRole("combobox");
    this.champion2Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(1)
      .getByRole("combobox");
    this.champion3Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(2)
      .getByRole("combobox");
    this.champion4Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(3)
      .getByRole("combobox");
    this.champion5Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(4)
      .getByRole("combobox");
    this.champion6Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(5)
      .getByRole("combobox");
    this.champion7Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(6)
      .getByRole("combobox");
    this.champion8Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(7)
      .getByRole("combobox");
    this.champion9Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(8)
      .getByRole("combobox");
    this.champion10Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(9)
      .getByRole("combobox");
    this.champion11Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(10)
      .getByRole("combobox");
    this.champion12Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(11)
      .getByRole("combobox");
    this.champion13Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(12)
      .getByRole("combobox");
    this.champion14Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(13)
      .getByRole("combobox");
    this.champion15Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(14)
      .getByRole("combobox");
    this.champion16Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(15)
      .getByRole("combobox");
    this.champion17Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(16)
      .getByRole("combobox");
    this.champion18Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(17)
      .getByRole("combobox");
    this.champion19Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(18)
      .getByRole("combobox");
    this.champion20Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(19)
      .getByRole("combobox");
    this.champion21Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(20)
      .getByRole("combobox");
    this.champion22Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(21)
      .getByRole("combobox");
    this.champion23Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(22)
      .getByRole("combobox");
    this.champion24Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(23)
      .getByRole("combobox");
    this.champion25Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(24)
      .getByRole("combobox");
    this.champion26Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(25)
      .getByRole("combobox");
    this.champion27Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(26)
      .getByRole("combobox");
    this.champion28Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(27)
      .getByRole("combobox");
    this.champion29Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(28)
      .getByRole("combobox");
    this.champion30Rank = page
      .locator(".rpg-dropdown.champion-selector-rank")
      .nth(29)
      .getByRole("combobox");
    this.champion1SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(0)
      .getByRole("combobox");
    this.champion2SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(1)
      .getByRole("combobox");
    this.champion3SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(2)
      .getByRole("combobox");
    this.champion4SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(3)
      .getByRole("combobox");
    this.champion5SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(4)
      .getByRole("combobox");
    this.champion6SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(5)
      .getByRole("combobox");
    this.champion7SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(6)
      .getByRole("combobox");
    this.champion8SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(7)
      .getByRole("combobox");
    this.champion9SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(8)
      .getByRole("combobox");
    this.champion10SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(9)
      .getByRole("combobox");
    this.champion11SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(10)
      .getByRole("combobox");
    this.champion12SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(11)
      .getByRole("combobox");
    this.champion13SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(12)
      .getByRole("combobox");
    this.champion14SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(13)
      .getByRole("combobox");
    this.champion15SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(14)
      .getByRole("combobox");
    this.champion16SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(15)
      .getByRole("combobox");
    this.champion17SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(16)
      .getByRole("combobox");
    this.champion18SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(17)
      .getByRole("combobox");
    this.champion19SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(18)
      .getByRole("combobox");
    this.champion20SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(19)
      .getByRole("combobox");
    this.champion21SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(20)
      .getByRole("combobox");
    this.champion22SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(21)
      .getByRole("combobox");
    this.champion23SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(22)
      .getByRole("combobox");
    this.champion24SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(23)
      .getByRole("combobox");
    this.champion25SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(24)
      .getByRole("combobox");
    this.champion26SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(25)
      .getByRole("combobox");
    this.champion27SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(26)
      .getByRole("combobox");
    this.champion28SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(27)
      .getByRole("combobox");
    this.champion29SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(28)
      .getByRole("combobox");
    this.champion30SigLevel = page
      .locator(".rpg-dropdown.champion-selector-level")
      .nth(29)
      .getByRole("combobox");
    this.prestige = page
      .getByText("YOUR PRESTIGE IS")
      .locator("..")
      .getByRole("heading");
    this.deleteAllButton = page.locator(".rpg-champions-text.button-delete.XS");
  }

  async goto() {
    await this.page.goto("/academy/prestige-calculator/");
  }
}
