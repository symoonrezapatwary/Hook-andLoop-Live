import test from "@fixtures/basePages"

import { devices } from "@playwright/test";



test("001 | Verify The DuraGrip Brand's Sew on products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://hookandloop.com/')
        await page.waitForLoadState()

    })
    await test.step('Click on the brands from the nav bar', async () => {

        await AutomationExPage.Bands_click();
    })
      
        await test.step('Click on the DuraGrip Sew On product', async () => {
            await AutomationExPage.Sewon_click();

        })
        await test.step('Click on the Width option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.wait()
            await AutomationExPage.Width_click();
            await AutomationExPage.wait()

        })
        await test.step('Click on the color option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.BlackClr_click();

        })
        await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

            await page.waitForTimeout(3000);
            await AutomationExPage.Both_click();

        })
        await test.step('Click on the Add to cart button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.AddToCartBTN_click();
            await page.waitForLoadState()

        })
        await test.step('Click on the Checkout button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.ChkOutBTN_click();

        })
        await test.step('Fill the email input field', async () => {
            await page.waitForTimeout(6000);
            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })

    })

test("002 | Verify The velcro Brand's Sew on products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {
        await test.step('Navigate to the Url', async () => {
            await page.goto('https://hookandloop.com/')

        })
        await test.step('Click on the brands from the nav bar', async () => {
            await AutomationExPage.Bands_click();
        })

        await test.step('Click on the DuraGrip Sew On product', async () => {
            await AutomationExPage.velcroSewonClick()

        })
        await test.step('Click on the Width option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Width_click();
            await AutomationExPage.wait()

        })
        await test.step('Click on the color option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.velcroSewoncolorClick();

        })
        await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

            await page.waitForTimeout(3000);
            await AutomationExPage.velcroSewonloopClick();

        })
        await test.step('Click on the Add to cart button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.AddToCartBTN_click();

        })
        await test.step('Click on the Checkout button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.ChkOutBTN_click();

        })
        await test.step('Fill the email input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })

    })

    test("003 | Verify The duragrip Brand's peal and steal products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {
        await test.step('Navigate to the Url', async () => {
            await page.goto('https://hookandloop.com/')

        })
        await test.step('Click on the brands from the nav bar', async () => {
            await AutomationExPage.Bands_click();
        })

        await test.step('Click on the DuraGrip Sew On product', async () => {
            await AutomationExPage.DuragripPealandstealClick()

        })
        await test.step('Click on the Width option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Width_click();
            await AutomationExPage.wait()

        })
        await test.step('Click on the color option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.pealblackClick();

        })
        await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

            await page.waitForTimeout(3000);
            await AutomationExPage.velcroSewonloopClick();
            await AutomationExPage.rubberClick()

        })
        await test.step('Click on the Add to cart button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.AddToCartBTN_click();

        })
        await test.step('Click on the Checkout button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.ChkOutBTN_click();

        })
        await test.step('Fill the email input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })

    })
    test("004 | Verify The velcro Brand's peal and stick products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {
        await test.step('Navigate to the Url', async () => {
            await page.goto('https://hookandloop.com/')

        })
        await test.step('Click on the brands from the nav bar', async () => {
            await AutomationExPage.Bands_click();
        })

        await test.step('Click on the DuraGrip Sew On product', async () => {
            await AutomationExPage.VelcropealClick()

        })
        await test.step('Click on the Width option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.fourinchClick();
            await AutomationExPage.wait()

        })
        await test.step('Click on the color option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.pealblackClick();

        })
        await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

            await page.waitForTimeout(3000);
            await AutomationExPage.velcroSewonloopClick();
            await AutomationExPage.rubberClick()

        })
        await test.step('Click on the Add to cart button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.AddToCartBTN_click();

        })
        await test.step('Click on the Checkout button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.ChkOutBTN_click();

        })
        await test.step('Fill the email input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })

    })
    test("005 | Verify The duragrip Brand's coins products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {

        await test.step('Navigate to the Url', async () => {
            await page.goto('https://hookandloop.com/')

        })
        await test.step('Click on the brands from the nav bar', async () => {
            await AutomationExPage.Bands_click();
        })

        await test.step('Click on the DuraGrip Sew On product', async () => {
            await AutomationExPage.coinsClick()

        })
        await test.step('Click on the Width option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.coinswidthClick();
            await AutomationExPage.wait()

        })
        await test.step('Click on the color option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.pealblackClick();

        })
        await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

            await page.waitForTimeout(3000);
            await AutomationExPage.velcroSewonloopClick();


        })
        await test.step('Click on the Add to cart button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.AddToCartBTN_click();

        })
        await test.step('Click on the Checkout button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.ChkOutBTN_click();

        })
        await test.step('Fill the email input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })

    })
    test("010 | Verify The duragrip Brand's straps products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {

        await test.step('Navigate to the Url', async () => {
            await page.goto('https://hookandloop.com/')

        })
        await test.step('Click on the brands from the nav bar', async () => {
            await AutomationExPage.Bands_click();
        })

        await test.step('Click on the DuraGrip Sew On product', async () => {
            await AutomationExPage.strapsClick()
            await AutomationExPage.wait()

        })
        await test.step('Click on the Width option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.strapslenInput();
            await AutomationExPage.strapsquanInput()
            await AutomationExPage.strapapplyclick()
            await AutomationExPage.wait()
          
        })
        await test.step('Click on the Add to cart button', async () => {
            await page.waitForSelector("//span[text()='Add to cart']")

            await AutomationExPage.strapAddToCartBTN_click();

        })
        await test.step('Click on the Checkout button', async () => {
            await AutomationExPage.gotoshopping_click();
            await AutomationExPage.wait()
            await AutomationExPage.procceedTochkout_click();
            await AutomationExPage.wait()

        })
        await test.step('Fill the email input field', async () => {

            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {

            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {

            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {

            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })
    })
    test("011 | Verify The duragrip Brand's wide loop products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {

        await test.step('Navigate to the Url', async () => {
            await page.goto('https://hookandloop.com/')

        })
        await test.step('Click on the brands from the nav bar', async () => {
            await AutomationExPage.Bands_click();
        })

        await test.step('Click on the DuraGrip wide loop product', async () => {
            await AutomationExPage.wideLoopClick()
            // await AutomationExPage.wait()
            await AutomationExPage.flamewideLoopClick()

        })

        await test.step('Click on the Add to cart button', async () => {
            await AutomationExPage.wait()
            const addToCartScript = await page.waitForResponse('https://dev2.hookandloop.com/static/version1716191954/frontend/Raveinfosys/hookandloop/en_US/Magento_Ui/js/form/adapter/buttons.js');
            console.log("Magento_Ui buttons loaded")
            // await page.waitForTimeout(3000);
            await AutomationExPage.WideLoopAddToCartBTN_click();
        })
        await test.step('Click on the Checkout button', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.ChkOutBTN_click();

        })
        await test.step('Fill the email input field', async () => {
            await page.waitForTimeout(10000);

            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {

            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {

            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {

            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })
    })
    test.describe('Mobile Viewport Tests', () => {
        test("006 | Verify The duragrip Brand's Coin products chcekout functionalities are working fineon mobile", async ({ page, AutomationExPage, NAvigationPage }) => {

            await test.step('Navigate to the Url', async () => {
                await page.setViewportSize({ width: 430, height: 932 });
                await page.goto('https://hookandloop.com/')

            })
            await test.step('Click on the menu bar', async () => {
                await AutomationExPage.MenuClick()

            })

            await test.step('Click on the brands from the nav bar', async () => {
                await AutomationExPage.MblBrandsClick();
            })

            await test.step('Click on the DuraGrip Sew On product', async () => {
                await AutomationExPage.MblcoinsClick()

            })
            await test.step('Click on the Width option of the product', async () => {

                await AutomationExPage.wait()
                await AutomationExPage.coinswidthClick();
                await AutomationExPage.wait()

            })
            await test.step('Click on the color option of the product', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.pealblackClick();

            })
            await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

                await page.waitForTimeout(3000);
                await AutomationExPage.velcroSewonloopClick();


            })
            await test.step('Click on the Add to cart button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.AddToCartBTN_click();

            })
            await test.step('Click on the Checkout button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.ChkOutBTN_click();

            })
            await test.step('Fill the email input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Email_input();

            })
            await test.step('Fill the First Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.FirstName_input()

            })
            await test.step('Fill the Last Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.LastName_input()

            })
            await test.step('Fill the Address input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Address_input()

            })
            await test.step('Select the Country', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.countrydropdown()

            })
            await test.step('Select the state', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Handlestatedropdown()

            })
            await test.step('Fill the city input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.City_input()


            })
            await test.step('Fill the Zip input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Zip_input()


            })

            await test.step('Fill the phone input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Phone_input()


            })
            await test.step('Priority Mall Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.PriorityMAll_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()
    
    
            })
            await test.step('Net 30 selection', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.net30_click()
    
    
            })
            await test.step('Order Number Input', async () => {
    
                await AutomationExPage.orderNo_input()
    
            })
    
    
    
            await test.step('Commnet Input', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.comment_input()
                await page.waitForTimeout(3000);
    
    
            })
    
            await test.step('Click on the place order button', async () => {
                await page.waitForLoadState()
                await AutomationExPage.wait()
                await AutomationExPage.PLace_click()
                await page.waitForTimeout(6000);
    
    
            })
            await test.step('Validate the order has been placed successfully', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.URLValid()
                await page.waitForTimeout(6000);
                
    
    
            })
        })

    test("007 | Verify The velcro Brand's sewon products chcekout functionalities are working fineon mobile", async ({ page, AutomationExPage, NAvigationPage }) => {

            await test.step('Navigate to the Url', async () => {
                await page.setViewportSize({ width: 360, height: 640 });
                await page.goto('https://hookandloop.com/')

            })
            await test.step('Click on the menu bar', async () => {
                await AutomationExPage.MenuClick()

            })
            await test.step('Click on the brands from the nav bar', async () => {
                await AutomationExPage.MblBrandsClick();
            })



            await test.step('Click on the DuraGrip Sew On product', async () => {
                await AutomationExPage.MblvelcroSewonClick()
                await page.waitForTimeout(3000)



            })
            await test.step('Click on the Width option of the product', async () => {


                await page.waitForTimeout(3000);
                await AutomationExPage.Width_click();
                await AutomationExPage.wait()

            })
            await test.step('Click on the color option of the product', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.velcroSewoncolorClick();

            })
            await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

                await page.waitForTimeout(3000);
                await AutomationExPage.velcroSewonloopClick();

            })
            await test.step('Click on the Add to cart button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.AddToCartBTN_click();

            })
            await test.step('Click on the Checkout button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.ChkOutBTN_click();

            })
            await test.step('Fill the email input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Email_input();

            })
            await test.step('Fill the First Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.FirstName_input()

            })
            await test.step('Fill the Last Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.LastName_input()

            })
            await test.step('Fill the Address input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Address_input()

            })
            await test.step('Select the Country', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.countrydropdown()

            })
            await test.step('Select the state', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Handlestatedropdown()

            })
            await test.step('Fill the city input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.City_input()


            })
            await test.step('Fill the Zip input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Zip_input()


            })

            await test.step('Fill the phone input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Phone_input()


            })
            await test.step('Priority Mall Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.PriorityMAll_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()
    
    
            })
            await test.step('Net 30 selection', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.net30_click()
    
    
            })
            await test.step('Order Number Input', async () => {
    
                await AutomationExPage.orderNo_input()
    
            })
    
    
    
            await test.step('Commnet Input', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.comment_input()
                await page.waitForTimeout(3000);
    
    
            })
    
            await test.step('Click on the place order button', async () => {
                await page.waitForLoadState()
                await AutomationExPage.wait()
                await AutomationExPage.PLace_click()
                await page.waitForTimeout(6000);
    
    
            })
            await test.step('Validate the order has been placed successfully', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.URLValid()
                await page.waitForTimeout(6000);
                
    
    
            })

        })
        test("008 | Verify The DuraGrip Brand's Sew on products chcekout functionalities are working fine on mobile", async ({ page, AutomationExPage }) => {
            await test.step('Navigate to the Url', async () => {
                await page.setViewportSize({ width: 360, height: 640 });
                await page.goto('https://hookandloop.com/')

            })
            await test.step('Click on the menu bar', async () => {
                await AutomationExPage.MenuClick()

            })
            await test.step('Click on the brands from the nav bar', async () => {
                await AutomationExPage.MblBrandsClick();
            })



            await test.step('Click on the DuraGrip Sew On product', async () => {
                await AutomationExPage.MblduraSewonClick()
                await page.waitForTimeout(3000)



            })
            await test.step('Click on the Width option of the product', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Width_click();
                await AutomationExPage.wait()

            })
            await test.step('Click on the color option of the product', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.BlackClr_click();

            })
            await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

                await page.waitForTimeout(3000);
                await AutomationExPage.Both_click();

            })
            await test.step('Click on the Add to cart button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.AddToCartBTN_click();

            })
            await test.step('Click on the Checkout button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.ChkOutBTN_click();

            })
            await test.step('Fill the email input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Email_input();

            })
            await test.step('Fill the First Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.FirstName_input()

            })
            await test.step('Fill the Last Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.LastName_input()

            })
            await test.step('Fill the Address input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Address_input()

            })
            await test.step('Select the Country', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.countrydropdown()

            })
            await test.step('Select the state', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Handlestatedropdown()

            })
            await test.step('Fill the city input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.City_input()


            })
            await test.step('Fill the Zip input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Zip_input()


            })

            await test.step('Fill the phone input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Phone_input()


            })
            await test.step('Priority Mall Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.PriorityMAll_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()
    
    
            })
            await test.step('Net 30 selection', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.net30_click()
    
    
            })
            await test.step('Order Number Input', async () => {
    
                await AutomationExPage.orderNo_input()
    
            })
    
    
    
            await test.step('Commnet Input', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.comment_input()
                await page.waitForTimeout(3000);
    
    
            })
    
            await test.step('Click on the place order button', async () => {
                await page.waitForLoadState()
                await AutomationExPage.wait()
                await AutomationExPage.PLace_click()
                await page.waitForTimeout(6000);
    
    
            })
            await test.step('Validate the order has been placed successfully', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.URLValid()
                await page.waitForTimeout(6000);
                
    
    
            })
        })
        test("009 | Verify The duragrip Brand's peal and steal products chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {
            await test.step('Navigate to the Url', async () => {
                await page.setViewportSize({ width: 360, height: 640 });
                await page.goto('https://hookandloop.com/')
                await AutomationExPage.scrollPage(page, 'down')
                await AutomationExPage.scrollPage(page, 'up')

            })
            await test.step('Click on the menu bar', async () => {
                await AutomationExPage.MenuClick()

            })
            await test.step('Click on the brands from the nav bar', async () => {
                await AutomationExPage.MblBrandsClick();
            })
            await test.step('Click on the DuraGrip Sew On product', async () => {
                await AutomationExPage.MbldurapealandStickClick()

            })
            await test.step('Click on the Width option of the product', async () => {
                await page.waitForTimeout(2000);
                await AutomationExPage.scrollPage(page, 'down')
                await AutomationExPage.scrollPage(page, 'up')

                await AutomationExPage.Width_click();
                await AutomationExPage.wait()

            })
            await test.step('Click on the color option of the product', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.pealblackClick();

            })
            await test.step('Click on the Both(Hook&Loop) option of the product', async () => {

                await page.waitForTimeout(3000);
                await AutomationExPage.velcroSewonloopClick();
                await AutomationExPage.rubberClick()

            })
            await test.step('Click on the Add to cart button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.AddToCartBTN_click();

            })
            await test.step('Click on the Checkout button', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.ChkOutBTN_click();

            })
            await test.step('Fill the email input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Email_input();

            })
            await test.step('Fill the First Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.FirstName_input()

            })
            await test.step('Fill the Last Name input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.LastName_input()

            })
            await test.step('Fill the Address input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Address_input()

            })
            await test.step('Select the Country', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.countrydropdown()

            })
            await test.step('Select the state', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Handlestatedropdown()

            })
            await test.step('Fill the city input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.City_input()


            })
            await test.step('Fill the Zip input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Zip_input()


            })

            await test.step('Fill the phone input field', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.Phone_input()


            })
            await test.step('Priority Mall Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.PriorityMAll_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()


            })
            await test.step('Next Button Click', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.NextBTN_Click()
    
    
            })
            await test.step('Net 30 selection', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.net30_click()
    
    
            })
            await test.step('Order Number Input', async () => {
    
                await AutomationExPage.orderNo_input()
    
            })
    
    
    
            await test.step('Commnet Input', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.comment_input()
                await page.waitForTimeout(3000);
    
    
            })
    
            await test.step('Click on the place order button', async () => {
                await page.waitForLoadState()
                await AutomationExPage.wait()
                await AutomationExPage.PLace_click()
                await page.waitForTimeout(6000);
    
    
            })
            await test.step('Validate the order has been placed successfully', async () => {
                await page.waitForTimeout(3000);
                await AutomationExPage.URLValid()
                await page.waitForTimeout(6000);
                
    
    
            })
        })
    
    test("012 | Verify The duragrip Brand's straps products chcekout functionalities are working fine on mobile", async ({ page, AutomationExPage }) => {

        await test.step('Navigate to the Url', async () => {
            await page.setViewportSize({ width: 360, height: 640 });
            await page.goto('https://hookandloop.com/')
            await AutomationExPage.scrollPage(page, 'down')
            await AutomationExPage.scrollPage(page, 'up')

        })

        await test.step('Click on the menu bar', async () => {
            await AutomationExPage.MenuClick()

        })
        await test.step('Click on the brands from the nav bar', async () => {
            await AutomationExPage.MblBrandsClick();
        })

        await test.step('Click on the DuraGrip Sew On product', async () => {
            await AutomationExPage.mblstrapsClick()
            await AutomationExPage.strapsClick()
            await AutomationExPage.wait()

        })
        await test.step('Click on the Width option of the product', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.strapslenInput();
            await AutomationExPage.strapsquanInput()
            await AutomationExPage.strapapplyclick()
            await AutomationExPage.wait()

        })
        await test.step('Click on the Add to cart button', async () => {
            await page.waitForSelector("//span[text()='Add to cart']")

            await AutomationExPage.strapAddToCartBTN_click();

        })
        await test.step('Click on the Checkout button', async () => {
            await AutomationExPage.gotoshopping_click();
            await AutomationExPage.wait()
            await AutomationExPage.procceedTochkout_click();
            await AutomationExPage.wait()

        })
        await test.step('Fill the email input field', async () => {

            await AutomationExPage.Email_input();

        })
        await test.step('Fill the First Name input field', async () => {

            await AutomationExPage.FirstName_input()

        })
        await test.step('Fill the Last Name input field', async () => {

            await AutomationExPage.LastName_input()

        })
        await test.step('Fill the Address input field', async () => {

            await AutomationExPage.Address_input()

        })
        await test.step('Select the Country', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.countrydropdown()

        })
        await test.step('Select the state', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Handlestatedropdown()

        })
        await test.step('Fill the city input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.City_input()


        })
        await test.step('Fill the Zip input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Zip_input()


        })

        await test.step('Fill the phone input field', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.Phone_input()


        })
        await test.step('Priority Mall Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.PriorityMAll_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Next Button Click', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.NextBTN_Click()


        })
        await test.step('Net 30 selection', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.net30_click()


        })
        await test.step('Order Number Input', async () => {

            await AutomationExPage.orderNo_input()

        })



        await test.step('Commnet Input', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.comment_input()
            await page.waitForTimeout(3000);


        })

        await test.step('Click on the place order button', async () => {
            await page.waitForLoadState()
            await AutomationExPage.wait()
            await AutomationExPage.PLace_click()
            await page.waitForTimeout(6000);


        })
        await test.step('Validate the order has been placed successfully', async () => {
            await page.waitForTimeout(3000);
            await AutomationExPage.URLValid()
            await page.waitForTimeout(6000);
            


        })
 })
})
