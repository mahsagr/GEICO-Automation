import * as customers from "./customer.json"
import { GeicoPage } from "./pageObjects/geico-motor-page-object-model";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver:WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  describe("Start quote for motorcycle insurance", ()=>{

    const page= new GeicoPage(driver)
    // afterAll(async () => {
    //     await page.driver.quit();
    //   });

    test("it navigates to geico webpage and starts application", async ()=>{
        await page.navigate()
        await page.selectNoGeicoAutoInsu()
        await page.fillInDOB(customers.mob, customers.dob, customers.yob);
        await page.fillInFirstLastName(customers.firstName, customers.lastName)
        await page.fillInAddress(customers.streetAddress, customers.zipCode)
        await page.fillInVIN(customers.vin)
        await page.fillInAntiThef(customers.antiTheftSystem)
        await page.selectOwnerShipStatus()
        await page.selectPrimaryUse()
        await page.passFormSummary()
        await page.selectOperateMotor()
        await page.selectGenderMaritialStatus(customers.gender, customers.status)
        await page.fillInSSN(customers.ssn);
        await page.fillInUnderAgeChild();
        await page.fillInOperationMotorYears(customers.operationYears)
        await page.fillInSafetyCourse()
        await page.fillInCurrentMotorInsurance()
        await page.fillInEmail(customers.email)
        await page.passFormSummary();
        //Submit the form to get Quote
        //await page.submitForm();
    })
  });