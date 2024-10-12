// FOLLOW https://playwright.dev/docs/pom for iskelet
// see both POM and PO 
// model and object relations in practice
//write locators

// import { expect, type Locator, type Page } from '@playwright/test'; // THIS IS FOR TYPE SCRIPT

// POM structure eases authoring and maintenance of test suites
// PO represents parts of web application; home, products, etc
// PO as higher-level API helps to create reusable codes

// Below is playwright.dev page helper encapsulation class 
 
const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
};
 
 // READY to use in our tests

)
