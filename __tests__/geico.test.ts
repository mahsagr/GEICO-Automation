import * as employeeData from "./customer.json"
import { GeicoPage } from "./pageObjects/geico-page-object-model";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver:WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  describe("Start quote for auto insurance", ()=>{

    const page= new GeicoPage(driver)
    // afterAll(async () => {
    //     await page.driver.quit();
    //   });

    test("it navigates to geico webpage and starts application", async ()=>{
        await page.navigate();
        await page.startApplication();

    })







  });