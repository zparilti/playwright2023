const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('./signupLogin');

test('home page should be visible', async({ page }) => {
	const playwrightDev = new PlaywrightDevPage(page); // #1. Launch browser
		
	await playwrightDev.goto(); // #2 Navigate to url
	await page.waitForTimeout(10); // PAUSE
	
	await playwrightDev.homePage(); //#3 Homepage is visible
	await page.waitForTimeout(10); // PAUSE
	
	await playwrightDev.signuppageLink(); //#4 & 5 New User Signup!
	await page.waitForTimeout(1000); // PAUSE
	
	await page.getByPlaceholder('Name').fill('playwright'); //# 6 name and email 
	//await page.getByPlaceholder('Name').clear();
	await page.getByPlaceholder('Name').blur();
	await page.waitForTimeout(2000);
	//await page.getByPlaceholder('Name').press('Enter');	
	await page.waitForTimeout(1000); // PAUSE	
	await page.fill('xpath=//*[@id="form"]/div/div/div[3]/div/form/input[3]', "ab@g.com"); //WORKS
	await page.waitForTimeout(1000); // PAUSE
	await page.getByRole('button', { name: 'Signup' }).click(); //# 7 click
	await page.waitForTimeout(1000); // PAUSE
	
	await playwrightDev.accountInfo(); // # 8 Verify ACCOUNT INFO visibility
	//await page.getByText('Item').click({ button: 'right' });	
	
	// 9. Fill details: Title, Name, Email, Password, Date of birth	
	//await page.getByLabel('Mr').check();
	await page.check('xpath=//*[@id="id_gender2"]"]'); // GIVES ERROR
	await page.waitForTimeout(1000); // PAUSE

	await page.check('xpath=//*[@id="id_gender1"]'); // WORKS IF COMES FIRST
	await page.waitForTimeout(1000); // PAUSE
	
	// XPATH NOT GOOD FOR PLAYWRIGHT
	//await page.getByPlaceholder('xpath=//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('e@g.com');
	//await page.getByPlaceholder('xpath=//Email Address'[1][0]).fill('ne55weradw');
	//await page.getByPlaceholder('xpath=//placeholder=Email Address'[1]).fill('ne55weradw');
	//await page.mouse.up();
	//await page.getByText('Signup').hover();
	//await page.fill('input[placeholder="Email Address"]', "ab@g.com"); //WORKS
		
	//await playwrightDev.fieldemailBox();
	//await page.fill('input[placeholder="Email Address"]', "ab@g.com"); //WORKS?
	//await page.fill(placeholder="Email Address", "new value")
		
	//await page.getByPlaceholder('Email Address').press('Enter');	
	//await page.getByPlaceholder('Email Address').click();
	//await page.getByPlaceholder("[placeholder='Email Address']").fill("ea@g.com");
	//await page.("[name='email']").fill("Some value")
	//await page.getByPlaceholder('Email Address').fill('pga@gmail.com');
	
	await page.waitForTimeout(10000); // PAUSE
	//await page.getByPlaceholder('Email Address').fill('playw@rig.com');
		
	// Hover over element				
	// await page.getByRole('textbox').fill('Peter');		
/*	
	// OTHERS FOR TRAINING PURPOSES
	await page.getByRole('button', { name: 'Test Cases' }).click();
	await page.waitForTimeout(1000); // PAUSE
	
	await playwrightDev.productsPage();
	await page.waitForTimeout(1000);//PAUSE		
	await page.screenshot({path: 'homepage.png'});	
	
	const title = await page.title();
	console.log(`Page title: ${title}`);	
*/	
	
});

/* 
test('test case', async({ page }) => {
	
	//constants and await here
});
*/

/*
	const visible = await page.getByRole('button').isVisible();
	if (visible) {
    // do something
	} */

/* 
Test Case 1: Register User

10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth


*/






