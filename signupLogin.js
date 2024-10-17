const { expect } = require('@playwright/test');
exports.PlaywrightDevPage = class PlaywrightDevPage {

constructor(page) {
	this.page = page;
	this.homepageLink = page.locator('a', {hasText: ' Home'});
	this.homepageHeader = page.locator('a', {hasText: ' Home'}); //A BETTER WAY?
	// SIGNUP / LOGIN
	this.signupLink = page.locator('a', {hasText: ' Signup / Login'}); // Locate element
	this.signupHeader = page.locator('h2', {hasText: 'New User Signup!'}); // Locate element
				
	this.accountinfoPage = page.locator('h2', {hasText: 'Enter Account Information'});

}

async goto() {
	await this.page.goto('https://www.automationexercise.com');
	//await expect(this.page).toBeVisible(); // ?	
}

async homePage() {
	await this.homepageLink.first().click();
	await expect(this.homepageHeader).toBeVisible();	
}

//SIGNUP 
async signuppageLink() {
	await this.signupLink.first().click();
	await expect(this.signupHeader).toBeVisible();
}

async accountInfo(){
	//await this.accountinfoPage.first().click();
	await expect(this.accountinfoPage).toBeVisible();	
}

};  
