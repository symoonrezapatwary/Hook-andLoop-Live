import { expect, Page } from "@playwright/test";




export default class AutomationEXPage {
    private page: Page;
    
    // static login: any;
    constructor(page: Page) {
        this.page = page;
        
    }

    private AutomationEx_page_elements = {

        Nav_Brands:"//span[text()='Brands']",
        DuraGrip_Brand:"//span[@wz_dt_ref='true']",
        SewON:"(//dd[@class='brands odd']//span)[1]",
        AddToCartbtn:"//button[@title='Add to Cart']",
        BlackClr:"(//div[@class='swatch-option color'])[1]",
        Width:"//div[@aria-label='6']",
        Both:"//div[@aria-label='Both']",
        Checkout:"//span[text()='Checkout']",
        ChkoutEmail:"(//input[@name='username'])[2]",
        FirstName:"(//span[text()='First Name']/following::input)[1]",
        LastName:"(//span[text()='Last Name']/following::input)[1]",
        Address:"(//span[text()='Street Address: Line 1']/following::input)[1]",
        CountryDrpdwn:"(//div[@class='control']//select)[1]",
        germanyClick:"//option[@data-title='Germany']",
        City:"input[name='city']",
        Zip:"input[name='postcode']",
        PhoneInput:"//input[@inputmode='numeric']",
        Statedrpdwn:"AD5IKOR",
        Berlin:"//option[@data-title='Berlin']",
        priorityMall:"//table[@class='table-checkout-shipping-method']",
        nextbtn:"//span[text()='Next']",
        CardnoInput:"//input[@title='Credit Card Number']",
        CVC:"//input[@title='Card Verification Number']",
        PlaceOrder:"(//span[text()='Place Order'])[2]",
        No:"//body[contains(@class,'pl-thm-raveinfosys pl-thm-raveinfosys-hookandloop')]",
        OrderSuccess:"page-title-wrapper",
        VelcroSewon:"(//dd[@class='velcro even']//span)[1]",
        velcrocolor:"//div[@class='swatch-option image']",
         VelcroLoop:"//div[@aria-label='Loop']",
        duragripPeelSteal:"(//dd[@class='brands odd']//span)[2]",
        RubberClic:"//div[@aria-label='Rubber']",
        pealBlack:"//div[@aria-label='Black']",
        velcroPealandseal:"(//dd[@class='velcro even']//span)[2]",
        fourinch:"//div[@aria-label='4']",
        coins:"(//span[text()='Coins'])[3]",
        coinswidth:"//div[@aria-label='1 7/8']",
        mobilebrands:"//a[.='Brands']",
        mobilecoins:"(//span[text()='Coins'])[1]",
        Menubar:"//span[@class='action nav-toggle']",
        Velmblsewon:"//a[@href='https://dev2.hookandloop.com/hook-and-loop-brands/velcro/sew-on']",
        duramblsewon:"(//span[text()='Sew On'])[1]",
        duramblPealStck:"(//span[text()='Peel & Stick'])[1]",
        straps:"//a[@href='https://dev2.hookandloop.com/customize-hook-and-loop-strap/']",
        strap_lengthinput:"//input[@type='number']",
        QuantityStaps:"//input[@inputmode='numeric']", 
        Applybtn:"//button[@title='Apply']",
        strapaddtocart:"//span[text()='Add to cart']",
        goToShopping:"//button[@title='Go to Shopping Cart']",
        proccedTochkout:"//span[text()='Proceed to Checkout']",
        paypalmethod:"//input[@value='paypal_express']",
        continueTopayPal:"//span[text()='Continue to PayPal']",
        PaypalEmail:"//input[@placeholder='E-Mail-Adresse oder Handynummer']",
        paypalPass:"//input[@placeholder='Passwort']",
        PaypalContbtn:"//button[text()='Einloggen']",
        completePurchase:"//button[text()='Complete Purchase']",
        wideLoop:"//dd[@class='brands odd']//li[5]",
        flameWideloop:"(//img[@class='product-image-photo lazyloaded'])[1]",
        wideLoopAddtoCart:"//button[@id='product-addtocart-button']",
        mblstraps:"(//span[text()='Straps'])[1]",
        durastraps:"(//a[@class='action primary'])[1]",
        net30:"(//span[text()='Continue to PayPal']/following::input)[1]",
        orderNo:"//input[@title='Purchase Order Number']",
        comment:"((//span[text()='Enter comment'])[3]/following::textarea)[1]",

       


    }
    async Bands_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Nav_Brands)

        try {
            await ele.click()
            


        } catch (error) {
            throw new Error('Unable to find the Brands Button Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async net30_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.net30)

        try {
            await ele.click()
            


        } catch (error) {
            throw new Error('Unable to find the net30 Button Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async orderNo_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.orderNo)

        try {
            await ele.fill("#")
            


        } catch (error) {
            throw new Error('Unable to find the order number input Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async comment_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.comment)

        try {
            await ele.fill("Test Order Place")
            


        } catch (error) {
            throw new Error('Unable to find the order number input Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async DuraGripBands_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.DuraGrip_Brand)

        try {
            await ele.hover()


        } catch (error) {
            throw new Error('Unable to find the DuraGripBrands Button Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async Sewon_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SewON)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Sew On Button Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async Width_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Width)

        try {
            await this.page.waitForSelector(this.AutomationEx_page_elements.Width)
            await ele.click({force:true,delay:100})


        } catch (error) {
            throw new Error('Unable to find the Width Element from the PDP |  Error occured: ' + error)
        }
    }
    async BlackClr_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.BlackClr)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the the black color Element from the PDP |  Error occured: ' + error)
        }
    }
    async Both_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Both)

        try {
            await ele.click({force:true})


        } catch (error) {
            throw new Error('Unable to find the the Both(Hook & Loop) Element from the PDP |  Error occured: ' + error)
        }
    }
    async AddToCartBTN_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.AddToCartbtn)

        try {
            await ele.isVisible()
            await this.page.waitForTimeout(300)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Cart Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async WideLoopAddToCartBTN_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.wideLoopAddtoCart)

        try {
            await ele.isVisible()
            // await this.page.waitForTimeout(300)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Cart Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async strapAddToCartBTN_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.strapaddtocart)

        try {
            await ele.isVisible()
            await this.page.waitForTimeout(300)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Cart Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async ChkOutBTN_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Checkout)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async gotoshopping_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.goToShopping)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async procceedTochkout_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.proccedTochkout)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async Email_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.ChkoutEmail)

        try {
            await this.page.waitForTimeout(10000)
            await ele.isVisible()
            await ele.dblclick({force:true, delay:100})
            await ele.fill("Test@test.com")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the Email Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async FirstName_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.FirstName)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("John")


        } catch (error) {
            throw new Error('Unable to find the First Name Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async LastName_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.LastName)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("David")


        } catch (error) {
            throw new Error('Unable to find the last Name Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async Address_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Address)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("Test Dummy address")


        } catch (error) {
            throw new Error('Unable to find the Address Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async CountryDrpdown_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CountryDrpdwn)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            //await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Country dropdown Element from the PDP |  Error occured: ' + error)
        }
    }
    async Countryoption_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.germanyClick)

        try {
            await this.page.waitForTimeout(6000)
            await ele.isVisible()
            await this.page.waitForTimeout(6000)
            await ele.dblclick({force:true, delay:200,button:"left"})
            await this.page.waitForTimeout(10000)
            await ele.dblclick({force:true, delay:200,button:"left"})
            


        } catch (error) {
            throw new Error('Unable to find the country Option Element from the PDP |  Error occured: ' + error)
        }
    }
    async StateDrpdwn_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Statedrpdwn)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})


        } catch (error) {
            throw new Error('Unable to find the country Option Element from the PDP |  Error occured: ' + error)
        }
    }
    async Stateoption_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Berlin)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})


        } catch (error) {
            throw new Error('Unable to find the country Option Element from the PDP |  Error occured: ' + error)
        }
    }
    async City_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.City)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("Berlin")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the City Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async Zip_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Zip)

        try {
             await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("10178")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the ZIP Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async Phone_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.PhoneInput)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("+49 30 822275893")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the Phone Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async PriorityMAll_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.priorityMall)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.dblclick({force:true, delay:200})
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the priority mall Element from the Shipping deatils page |  Error occured: ' + error)
        }
    }
    async NextBTN_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.nextbtn)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the Next button Element from the Shipping deatils page |  Error occured: ' + error)
        }
    }
   
    async handleDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async countrydropdown(){
        try {
            await this.handleDropdown("(//div[@class='control']//select)[1]", "DE");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async StateDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async Handlestatedropdown(){
        try {
            await this.handleDropdown("(//select[@class='select'])[2]", "82");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async Card_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CardnoInput)

        try {
            await this.page.waitForTimeout(6000)
            await ele.isVisible()
            await ele.click({force:true, delay:100})
            await ele.fill("5424000000000015")


        } catch (error) {
            throw new Error('Unable to find the card number Input Element from the checkout |  Error occured: ' + error)
        }
    }
    async MonthDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async Handlemonthdropdown(){
        try {
            await this.handleDropdown("//select[@class='select month']", "2");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async YearDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async Handleyeardropdown(){
        try {
            await this.handleDropdown("//select[@class='select year']", "2025");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    async Cvc_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CVC)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("300")


        } catch (error) {
            throw new Error('Unable to find the card number Input Element from the checkout |  Error occured: ' + error)
        }
    }
    async PLace_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.PlaceOrder)

        try {
             await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({ delay:100})


        } catch (error) {
            throw new Error('Unable to find the Place order button Element from the checkout |  Error occured: ' + error)
        }
    }
    async No_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.No)

        try {  
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})


        } catch (error) {
            throw new Error('Unable to find the No button Element from the checkout |  Error occured: ' + error)
        }
    }
    async OrderSuccess() {
        const ele = this.page.locator(this.AutomationEx_page_elements.OrderSuccess)

        try {
            await this.page.waitForTimeout(6000)
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the Oder success Element from the checkout |  Error occured: ' + error)
        }
    }
    async isValidURL(url: string) :Promise<boolean>{
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
        
    }
    
    // Example usage:
    async URLValid(){
    const url = 'https:hookandloop.com/checkout/onepage/success/';
    if (await this.isValidURL(url)) {
        console.log('Valid URL');
    } else {
        console.log('Invalid URL');
    }
}
async velcroSewonClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.VelcroSewon)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on Element from the checkout |  Error occured: ' + error)
    }
}
async velcroSewoncolorClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.velcrocolor)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on color Element from the checkout |  Error occured: ' + error)
    }
}
async velcroSewonloopClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.VelcroLoop)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async DuragripPealandstealClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.duragripPeelSteal)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async rubberClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.RubberClic)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async pealblackClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.pealBlack)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async VelcropealClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.velcroPealandseal)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro peal and stick Element from the checkout |  Error occured: ' + error)
    }
}
async fourinchClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.fourinch)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro 4 inch Element from the checkout |  Error occured: ' + error)
    }
}
async coinsClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.coins)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the coins Element from the checkout |  Error occured: ' + error)
    }
}
async coinswidthClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.coinswidth)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the Velcro 4 inch Element from the checkout |  Error occured: ' + error)
    }
}
async MblBrandsClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.mobilebrands)

    try {
       
        await ele.isVisible()
         await this.page.waitForTimeout(6000)
        await ele.click({force:true,delay:100})
         await this.page.waitForTimeout(6000)
        await ele.click({force:true,delay:100})


    } catch (error) {
        throw new Error('Unable to find the Brands Element from the checkout |  Error occured: ' + error)
    }
}
async MblcoinsClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.mobilecoins)

    try {
        // await this.page.waitForTimeout(6000)
        await ele.isVisible()
        // await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        // await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the coins Element from the checkout |  Error occured: ' + error)
    }
}
async MenuClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.Menubar)

    try {
         await this.page.waitForTimeout(6000)
        await ele.isVisible()
         await this.page.waitForTimeout(6000)
        await ele.dblclick({force:true,delay:100})
         await this.page.waitForTimeout(6000)
        await ele.click({force:true,delay:300})
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the menu Element from the checkout |  Error occured: ' + error)
    }
}
async MblvelcroSewonClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.Velmblsewon)

    try {
         await this.page.waitForTimeout(3000)
        await ele.isVisible()
         await this.page.waitForTimeout(3000)
        await ele.click()
         await this.page.waitForTimeout(3000)
         await this.page.waitForTimeout(20000)
       


    } catch (error) {
        throw new Error('Unable to find the velcro sew on Element from the checkout |  Error occured: ' + error)
    }
}
async MblduraSewonClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.duramblsewon)

    try {
         await this.page.waitForTimeout(3000)
        await ele.isVisible()
         await this.page.waitForTimeout(3000)
        await ele.click()
         await this.page.waitForTimeout(3000)
         await this.page.waitForTimeout(20000)
       


    } catch (error) {
        throw new Error('Unable to find the velcro sew on Element from the checkout |  Error occured: ' + error)
    }
}
async MbldurapealandStickClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.duramblPealStck)

    try {
         await this.page.waitForTimeout(3000)
        await ele.isVisible()
         await this.page.waitForTimeout(3000)
        await ele.click()
         await this.page.waitForTimeout(3000)
         await this.page.waitForTimeout(20000)
       


    } catch (error) {
        throw new Error('Unable to find the velcro sew on Element from the checkout |  Error occured: ' + error)
    }
}
async scrollPage(page: Page, direction: 'down' | 'up') {
    const distance = direction === 'down' ? 100 : -100;
    await page.evaluate(async (distance) => {
      await new Promise<void>((resolve, reject) => {
        const scrollInterval = setInterval(() => {
          const currentY = window.scrollY;
          window.scrollBy(0, distance);
          if (distance > 0 && currentY >= document.body.scrollHeight - window.innerHeight) {
            clearInterval(scrollInterval);
            resolve();
          } else if (distance < 0 && currentY === 0) {
            clearInterval(scrollInterval);
            resolve();
          }
        }, 100); // Adjust the interval as needed
      });
    }, distance);
  }

  async wait() {
    console.log("in wait!!!")
    await this.page.waitForFunction(() => {
        return window.jQuery !== undefined;
    });
    console.log('jQuery is loaded and ready to use.');
    await this.page.waitForLoadState("domcontentloaded");
    console.log('domcontentloaded!!!');
    
  }
  async strapsClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.straps).first()

    try {
        // await this.page.waitForTimeout(6000)
        await ele.isVisible()
        // await this.page.waitForTimeout(3000)
        await ele.click({button:"left",force:true,delay:100})
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the straps Element from the checkout |  Error occured: ' + error)
    }
}
async mblstrapsClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.mblstraps).first()

    try {
        // await this.page.waitForTimeout(6000)
        await ele.isVisible()
        // await this.page.waitForTimeout(3000)
        await ele.click({button:"left",force:true,delay:100})
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the straps Element from the checkout |  Error occured: ' + error)
    }
}
async mbldurastrapsClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.durastraps)

    try {
        // await this.page.waitForTimeout(6000)
        await ele.isVisible()
        // await this.page.waitForTimeout(3000)
        await ele.click()
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the straps Element from the checkout |  Error occured: ' + error)
    }
}
async strapslenInput() {
    const ele = this.page.locator(this.AutomationEx_page_elements.strap_lengthinput)

    try {
        // await this.page.waitForTimeout(6000)
        await ele.isVisible()
        // await this.page.waitForTimeout(3000)
        await ele.fill("10")
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the straps length input Element from the checkout |  Error occured: ' + error)
    }
}
async strapsquanInput() {
    const ele = this.page.locator(this.AutomationEx_page_elements.QuantityStaps)

    try {
        // await this.page.waitForTimeout(6000)
        await ele.isVisible()
        // await this.page.waitForTimeout(3000)
        await ele.fill("30")
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the straps length input Element from the checkout |  Error occured: ' + error)
    }
}
async strapapplyclick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.Applybtn)

    try {
        // await this.page.waitForTimeout(6000)
        await ele.isVisible()
        // await this.page.waitForTimeout(3000)
        await ele.click()
        await this.page.waitForTimeout(1000)
       


    } catch (error) {
        throw new Error('Unable to find the straps length input Element from the checkout |  Error occured: ' + error)
    }
}
async PaypalBTN_click() {
    const ele = this.page.locator(this.AutomationEx_page_elements.paypalmethod)

    try {
        await ele.isVisible()
        await this.page.waitForTimeout(300)
        await ele.click()


    } catch (error) {
        throw new Error('Unable to find the paypal Button Element from the PDP |  Error occured: ' + error)
    }
}
async ContinueTopaypal_click() {
    const ele = this.page.locator(this.AutomationEx_page_elements.continueTopayPal)

    try {
        
        await ele.click()


    } catch (error) {
        throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
    }
}
async paypalEmail_input() {
    const ele = this.page.locator(this.AutomationEx_page_elements.PaypalEmail)

    try {
        await ele.clear()
        await ele.fill("sb-sbwqj25024209@personal.example.com")


    } catch (error) {
        throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
    }
}
async paypalpassword_input() {
    const ele = this.page.locator(this.AutomationEx_page_elements.paypalPass)

    try {
        
        await ele.fill("2t-OI-O(")


    } catch (error) {
        throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
    }
}
async paypalcontinue() {
    const ele = this.page.locator(this.AutomationEx_page_elements.PaypalContbtn)

    try {
        
        await ele.click()


    } catch (error) {
        throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
    }
}
async completepurchase() {
    const ele = this.page.locator(this.AutomationEx_page_elements.completePurchase)

    try {
        
        await ele.click()


    } catch (error) {
        throw new Error('Unable to find the complete purchase Button Element from the PDP |  Error occured: ' + error)
    }
}
async wideLoopClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.wideLoop)

    try {
        
        await ele.click()


    } catch (error) {
        throw new Error('Unable to find the wide loop Button Element from the PDP |  Error occured: ' + error)
    }
}
async flamewideLoopClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.flameWideloop)

    try {
        
        await ele.click()


    } catch (error) {
        throw new Error('Unable to find the flame wide loop card Element from the PDP |  Error occured: ' + error)
    }
}


}












    // private async generateRandomEmail() {
    //     const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //     let email = '';
    //     for (let i = 0; i < 10; i++) {
    //         email += characters.charAt(Math.floor(Math.random() * characters.length));
    //     }
    //     email += '@example.com';
    //     return email;
    // }

    // //Email input for sign up
    // async Email_Input() {
    //     const email = await this.generateRandomEmail();
    //     const ele= this.page.locator(this.AutomationEx_page_elements.EmailINput)
       

    //     try {
            
    //         // await this.page.fill("//input[@data-qa='signup-email']", email)
    //         await ele.fill(email)
           


    //     } catch (error) {
    //         throw new Error('Unable to find Email input element |  Error occured: ' + error)
    //     }

  
    

