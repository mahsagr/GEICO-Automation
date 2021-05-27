import * as customers from "./customer.json"
import { GeicoPage } from "./pageObjects/geico-motor-page-object-model";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

describe("Start quote for MotorCycle insurance", () => {

  const page = new GeicoPage(driver)

  test("it proceeds to Let's make getting a motorcycle quote even easier! page", async () => {
    await page.navigate()
    expect(await page.selectNoGeicoAutoInsu()).toBeTruthy();
  })
  
  test("it proceeds to We need your date of birth page", async () => {
    expect(await page.fillInDOB(customers.mob, customers.dob, customers.yob)).toBeTruthy();
  })

  test("it proceeds to We need your name page", async () => {
    expect(await page.fillInFirstLastName(customers.firstName, customers.lastName)).toBeTruthy();
  })  

  test("it proceeds to We need your address page", async () => {
    expect(await page.fillInAddress(customers.streetAddress, customers.zipCode)).toBeTruthy();
  })

  test("it proceeds to Let's add this motorcycle page", async () => {
    expect(await page.fillInVIN(customers.vin)).toBeTruthy();
  })  

  test("it proceeds to have an Anti-Theft device page", async () => {
    expect(await page.fillInAntiThef(customers.antiTheftSystem)).toBeTruthy();
  })  

  test("it proceeds to owned, financed, or leased page", async () => {
    expect(await page.selectOwnerShipStatus()).toBeTruthy();
  })

  test("it proceeds to primarily used page", async () => {
    expect(await page.selectPrimaryUse()).toBeTruthy();
  })

  test("it proceeds to Saved Motorcycles page", async () => {
    expect(await page.passFormSummary()).toBeTruthy();
  })

  test("it proceeds to Tell us more about you page, operation question", async () => {
    expect(await page.selectOperateMotor()).toBeTruthy();
  })

  test("it proceeds to Tell us more about you page, gender Marital status", async () => {
    expect(await page.selectGenderMaritialStatus(customers.gender, customers.status)).toBeTruthy();
  })

  test("it proceeds to Social Security Number page", async () => {
    expect(await page.fillInSSN(customers.ssn)).toBeTruthy();
  })

  test("it proceeds to Do you have custody of any children under age 18 in the home page", async () => {
    expect(await page.fillInUnderAgeChild()).toBeTruthy();
  })

  test("it proceeds to How many years have you operated a street legal motorcycle page", async () => {
    expect(await page.fillInOperationMotorYears(customers.operationYears)).toBeTruthy();
  })

  test("it proceeds to Tell us more about your driving history page", async () => {
    expect(await page.fillInSafetyCourse()).toBeTruthy();
  })

  test("it proceeds to Tell us more about you page, currently motorcycle insurance", async () => {
    expect(await page.fillInCurrentMotorInsurance()).toBeTruthy();
  })

  test("it proceeds to Contact Information page", async () => {
    expect(await page.fillInEmail(customers.email)).toBeTruthy();
  })

  test("it proceeds to Saved Drivers page", async () => {
    expect(await page.passFormSummary()).toBeTruthy();
  })

  test("form is submitted and customized quote is generated", async () => {
    //Submit the form to get Quote
    await page.submitForm()
  })
    
});

  // afterAll(async () => {
  //     await page.driver.quit();
  //   });