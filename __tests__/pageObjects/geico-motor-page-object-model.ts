import * as customers from "../customer.json"
import {
    Browser,
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { JsxEmit } from "typescript";

const fs = require("fs");
const chromedriver = require("chromedriver");

export class GeicoPage {

driver:WebDriver
url:string = "https://www.geico.com"
motorCycleButton: By = By.css("div[class='motorcycle card']")
startQuoteButton:By = By.id("submitBtn")
currentGeicoAutoInsurance: By = By.css(`label[for='${customers.geicoAutoInsurance}']`)
nextButton: By = By.css("button[type='button']")
dob:By = By.id("date-daydob")
mob:By = By.id("date-monthdob")
yob:By = By.id("date-yeardob")
firstName: By= By.id("firstName")
lastName: By= By.id("lastName")
addressInput: By = By.id("street")
zipInput:By = By.id("zip")
vinOption: By = By.css("label[for='hasVin0']")
vinInput: By = By.id("vin")
antiThef: By = By.id("antiTheftDevice");
ownerShipStatus: By = By.css(`label[for='${customers.ownerShip}']`)
primaryUseOption: By = By.css(`label[for='${customers.primaryUse}']`)
formSummary: By = By.id("form-summary-view");
formSummaryNext: By = By.css("button[type='submit']")
operateMotorCycle: By = By.css(`label[for='${customers.optMcycle}']`)
genderSelect: By = By.id("gender")
maritalStatusSelect: By = By.id("maritalStatus")
ssnInput: By = By.id("ssn")
underAgeChildren: By = By.css(`label[for='${customers.underAge}']`)
yearsOfOperations:By = By.id("yearsOperated");
safetyCourses: By = By.css(`label[for='${customers.safetyCourseTaken}']`)
insurance: By = By.css(`label[for='${customers.insured}']`)
emailInput: By = By.id("email")
formMotor: By = By.id("breakdown-main");

constructor(driver) {
    this.driver = driver;
}
async navigate() {

    await this.driver.get(this.url)
    //choose motorcycle
    await this.driver.wait(until.elementLocated(this.motorCycleButton));
    await (await this.driver.findElement(this.motorCycleButton)).click();
    // click on start quote
    await this.driver.wait(until.elementLocated(this.startQuoteButton));
    await (await this.driver.findElement(this.startQuoteButton)).click();
    
}

async selectNoGeicoAutoInsu() {
    //click on no geico auto insurance, yes is out of scope
    await this.driver.wait(until.elementLocated(this.currentGeicoAutoInsurance));
    await (await this.driver.findElement(this.currentGeicoAutoInsurance)).click();
    // click on next button
    await this.driver.wait(until.elementLocated(this.nextButton));
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.currentGeicoAutoInsurance))).isDisplayed();
}
async fillInDOB(m:number, d:number, y:number) {
    //fill in month of birth
    await this.driver.wait(until.elementLocated(this.mob));
    await (await this.driver.findElement(this.mob)).click();
    await (await this.driver.findElement(this.mob)).sendKeys(m);
    //fill in day of birth
    await (await this.driver.findElement(this.dob)).click();
    await (await this.driver.findElement(this.dob)).sendKeys(d);
    //fill in year of birth
    await (await this.driver.findElement(this.yob)).click();
    await (await this.driver.findElement(this.yob)).sendKeys(y);
    // click next
    await (await this.driver.findElement(this.nextButton)).click();
    //Checks to see if the element is in the page
    return await (await (this.driver.findElement(this.mob))).isDisplayed();
}

async fillInFirstLastName(first: string, last: string) {
    //First Name Last Name
    await this.driver.wait(until.elementLocated(this.firstName));
    await (await this.driver.findElement(this.firstName)).click();
    await this.driver.findElement(this.firstName).sendKeys(first);
    await (await this.driver.findElement(this.lastName)).click();
    await this.driver.findElement(this.lastName).sendKeys(last);
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.firstName))).isDisplayed();
}

async fillInAddress(street: string, zip: number) {
    //Address
    await this.driver.wait(until.elementLocated(this.addressInput));
    await (await this.driver.findElement(this.addressInput)).click();
    await this.driver.findElement(this.addressInput).sendKeys(street);
    await (await this.driver.findElement(this.zipInput)).click();
    await this.driver.findElement(this.zipInput).sendKeys(zip);
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.addressInput))).isDisplayed();
}

async fillInVIN(vin: string) {
    //VIN yes and enter VIN a potential bug!!! have to click twice on next when copy paste vin
    await this.driver.wait(until.elementLocated(this.vinOption));
    await (await this.driver.findElement(this.vinOption)).click();
    await this.driver.wait(until.elementLocated(this.vinInput));
    await (await this.driver.findElement(this.vinInput)).click();
    await this.driver.findElement(this.vinInput).sendKeys(vin);
    await (await this.driver.findElement(this.nextButton)).click();
    //bug fix
    setTimeout(async () => {
        await (await this.driver.findElement(this.nextButton)).click();
    }, 1000);
    return await (await (this.driver.findElement(this.vinOption))).isDisplayed();
}
async fillInAntiThef(system: string) {
    // Anti theft selection - No Device, Wheel Locks, Wheel Chain, Active Disabling Device,... refer to req
    await this.driver.wait(until.elementLocated(this.antiThef));
    await (await this.driver.findElement(this.antiThef)).click();
    await (await this.driver.findElement(this.antiThef)).sendKeys(system);
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.antiThef))).isDisplayed();
}
async selectOwnerShipStatus() {
    //Ownership Status in json file - Owned: vehicleOwned0 |Financed: vehicleOwned1|Leased: vehicleOwned2
    await this.driver.wait(until.elementLocated(this.ownerShipStatus));
    await (await this.driver.findElement(this.ownerShipStatus)).click();
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.ownerShipStatus))).isDisplayed();
}

async selectPrimaryUse() {
    // Primary use personal use: primaryUseprimaryUse0, Excluded: business use: primaryUseprimaryUse1
    await this.driver.wait(until.elementLocated(this.primaryUseOption));
    await (await this.driver.findElement(this.primaryUseOption)).click();
    await this.driver.wait(until.elementLocated(this.nextButton));
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.primaryUseOption))).isDisplayed();
}

async passFormSummary() {
    //next button clicks in form summary page
    await this.driver.wait(until.elementLocated(this.formSummaryNext));
    await (await this.driver.findElement(this.formSummaryNext)).click();
    return await (await (this.driver.findElement(this.formSummaryNext))).isDisplayed();
}

async selectOperateMotor() {
    //Operate morotcycle - operateMotorcycle0 for Yes, No excluded from testing
    await this.driver.wait(until.elementLocated(this.operateMotorCycle));
    await (await this.driver.findElement(this.operateMotorCycle)).click();
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.operateMotorCycle))).isDisplayed();
}

async selectGenderMaritialStatus(gender: string, status: string) {
    // Let's get to know you gender in mock F or M
    await this.driver.wait(until.elementLocated(this.genderSelect));
    await (await this.driver.findElement(this.genderSelect)).click();
    await (await this.driver.findElement(this.genderSelect)).sendKeys(gender);
    // Maritial Status: S for Single , Excluded:D Divorced,M Married,S Separated, W Widowed
    await this.driver.wait(until.elementLocated(this.maritalStatusSelect));
    await (await this.driver.findElement(this.maritalStatusSelect)).click();
    await (await this.driver.findElement(this.maritalStatusSelect)).sendKeys(status);
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.maritalStatusSelect))).isDisplayed();
}

async fillInSSN(ssn: string) {
    //ssn
    await this.driver.wait(until.elementLocated(this.ssnInput));
    await (await this.driver.findElement(this.ssnInput)).click();
    await this.driver.findElement(this.ssnInput).sendKeys(ssn);
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.nextButton))).isDisplayed();
}

async fillInUnderAgeChild() {
    //under age children - No underAge1, Yes excluded from testing
    await this.driver.wait(until.elementLocated(this.underAgeChildren));
    await (await this.driver.findElement(this.underAgeChildren)).click();
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.underAgeChildren))).isDisplayed();
}

async fillInOperationMotorYears(opyears: number) {
    //Years of motorcycle operations
    await this.driver.wait(until.elementLocated(this.yearsOfOperations));
    await (await this.driver.findElement(this.yearsOfOperations)).click();
    await this.driver.findElement(this.yearsOfOperations).sendKeys(opyears);
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.yearsOfOperations))).isDisplayed();
}
async fillInSafetyCourse() {
    //safety course? safetyFoundationCourse1 for No, Yes excluded from testing
    await this.driver.wait(until.elementLocated(this.safetyCourses));
    await (await this.driver.findElement(this.safetyCourses)).click();
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.safetyCourses))).isDisplayed();
}
async fillInCurrentMotorInsurance() {
    //tell us more  - current motor insurance? No hasCurrentCycleInsurance1 included, rest are excluded from testing
    await this.driver.wait(until.elementLocated(this.insurance));
    await (await this.driver.findElement(this.insurance)).click();
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.insurance))).isDisplayed();
}

async fillInEmail(email: string) {
    //email, phone number is not required
    await this.driver.wait(until.elementLocated(this.emailInput));
    await (await this.driver.findElement(this.emailInput)).click();
    await this.driver.findElement(this.emailInput).sendKeys(email);
    await (await this.driver.findElement(this.nextButton)).click();
    return await (await (this.driver.findElement(this.emailInput))).isDisplayed();
}

async submitForm() {
    //Submit the form to get motorCycle Quote
    await this.driver.wait(until.elementLocated(this.formMotor));
    await this.driver.wait(until.elementLocated(this.nextButton));
    await (await this.driver.findElement(this.nextButton)).click();
    //return await (await (this.driver.findElement(this.formMotor))).isDisplayed();
}

}

