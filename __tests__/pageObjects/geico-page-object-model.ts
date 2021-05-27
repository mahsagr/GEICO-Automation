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
startQuoteButton:By = By.id("submitBtn")
zipCodeInput:By = By.css("input[id*='Id_GiveInitialZipCode_']")
//zipCodeInput:By = By.id("zip")
nextButtZip: By = By.css("button[id*='Id_NEXT_']")
chooseAuto: By = By.css("div[id*='Id_GiveVehicleLobs_']")
nextButtAuto: By = By.css("button[id*='Id_ComboActivity_']")
dateOfBirth:By = By.css("input[id*='Id_GiveDateOfBirth_']")
nextButtDateofBirth: By = By.css("button[id*='Id_NEXT_']")
firstName: By= By.css("input[data-formotivid='FirstName']")
lastName: By= By.css("input[data-formotivid='LastName']")
nextButtName: By = By.css("button[id*='Id_NEXT_']")
addressInput: By = By.id("AddressSearch")
nextButtAddress: By = By.css("button[id*='Id_NEXT_']")
//ssnInput: By = By.css("input[id*='Id_GiveSSNLastFourDigits_']")
nextButtSsn: By = By.css("button[id*='Id_NEXT_']")
vinOption: By = By.css("label[id='labelForYes']")
nextButtVin: By = By.css("button[id*='Id_NEXT_']")
vinInput: By = By.css("input[id*='Id_GiveVinPreQuote']")
bodyStyleInput:By = By.css("input[id*='Id_GiveBodyStyle_']")
ownerShipStatus: By = By.css(`label[id='${customers.ownerShip}']`)
primaryUseOption: By = By.css(`label[id='${customers.primaryUse}']`)
daysPerWeekOptions: By = By.css("div[id*='Id_GiveDaysPerWeekCommute_']")
daysPerWeekSelect: By = By.css("select[id*='Id_GiveDaysPerWeekCommute_']")
milesInput: By = By.css("input[id*='Id_GiveMilesOneWay']")
annualMileage: By = By.css("div[id*='Id_GiveAnnualMileage_']")
summayPage: By = By.id("summaryPage")
continueSummaryButton: By = By.css("button[id*='Id_Continue_']")
genderOptions: By = By.css("div[id*='Id_GiveGender']")
genderSelect: By = By.css("select[id*='Id_GiveGender_']")
giveGenderNextButton: By = By.css("button[id*='Id_GiveGender_']")

maritalStatusDrop: By = By.css("div[id*='Id_GiveMaritalStatus_']")
maritalStatusSelect: By = By.css("select[id*='Id_GiveMaritalStatus_']")

ssnFullInput: By = By.css("input[id*='Id_GiveSocialSecurityNumber_']")

homeOwnOption: By = By.css(`label[id='${customers.ownRent}']`)
currentInsurance: By = By.css(`label[id='${customers.currentInsurance}']`)
drivingAge:By = By.css("input[id*='Id_GiveAgeFirstLicensed_']")
educationLevel: By = By.css("div[id*='Id_GiveEducationLevel_']")
educationSelect: By = By.css("select[id*='Id_GiveEducationLevel_']")
affiliationOption: By =By.css("label[id='labelForDNA']")
emplymentOptions: By = By.css("div[id*='Id_GiveEmploymentStatus_']")
employmentSelect: By = By.css("select[id*='Id_GiveEmploymentStatus_']")
occupationInput: By = By.css("input[id*='Id_GiveOccupation_']")
otherDriverNextButton: By = By.css("button[id*='Id_Continue_']")
driveSafeEnroll: By = By.css(`label[id='${customers.discountEnroll}']`)
emailInput: By = By.css("input[id*='Id_Email_']")

constructor(driver) {
    this.driver = driver;
}
async navigate() {

    await this.driver.get(this.url)
    
}

async startApplication() {
    //navigate to page and click on start quote button
    await this.driver.wait(until.elementLocated(this.startQuoteButton));
    await (await this.driver.findElement(this.startQuoteButton)).click();
    //zipcode page enters the zipcode and send the zipcode and click on next button
    await this.driver.wait(until.elementLocated(this.zipCodeInput));
    await (await this.driver.findElement(this.zipCodeInput)).click();
    await this.driver.findElement(this.zipCodeInput).sendKeys(customers.zipCode);
    await (await this.driver.findElement(this.nextButtZip)).click();
    //choosing vehicle
    await this.driver.wait(until.elementLocated(this.chooseAuto));
    await (await this.driver.findElement(this.chooseAuto)).click();
    await (await this.driver.findElement(this.nextButtAuto)).click();
    //about you-Date of Birth
    await this.driver.wait(until.elementLocated(this.dateOfBirth));
    await (await this.driver.findElement(this.dateOfBirth)).click();
    await this.driver.findElement(this.dateOfBirth).sendKeys(customers.dob);
    await (await this.driver.findElement(this.nextButtDateofBirth)).click();
    //name
    await this.driver.wait(until.elementLocated(this.firstName));
    await (await this.driver.findElement(this.firstName)).click();
    await this.driver.findElement(this.firstName).sendKeys(customers.firstName);
    await this.driver.wait(until.elementLocated(this.lastName));
    await (await this.driver.findElement(this.lastName)).click();
    await this.driver.findElement(this.lastName).sendKeys(customers.lastName);
    await (await this.driver.findElement(this.nextButtName)).click();
    //Address
    await this.driver.wait(until.elementLocated(this.addressInput));
    await (await this.driver.findElement(this.addressInput)).click();
    await this.driver.findElement(this.addressInput).sendKeys(customers.streetAddress);
    await (await this.driver.findElement(this.nextButtAddress)).click();
    //ssn
    // if(await this.driver.wait(until.elementLocated(this.ssnInput))) {
    //     await (await this.driver.findElement(this.ssnInput)).click();
    //     await this.driver.findElement(this.ssnInput).sendKeys(customers.ssn);
    //     await (await this.driver.findElement(this.nextButtSsn)).click();

    // }
    //await this.driver.wait(until.elementLocated(this.ssnInput));
    // await (await this.driver.findElement(this.ssnInput)).click();
    // await this.driver.findElement(this.ssnInput).sendKeys(customers.ssn);
    // await (await this.driver.findElement(this.nextButtSsn)).click();
    
    //VIN yes
    await this.driver.wait(until.elementLocated(this.vinOption));
    await (await this.driver.findElement(this.vinOption)).click();
    await (await this.driver.findElement(this.nextButtVin)).click();
    // enter vin number
    await this.driver.wait(until.elementLocated(this.vinInput));
    await (await this.driver.findElement(this.vinInput)).click();
    await this.driver.findElement(this.vinInput).sendKeys(customers.vin);
    await (await this.driver.findElement(this.nextButtVin)).click();
    // if bodystyle asked
    // if(await this.driver.wait(until.elementLocated(this.bodyStyleInput))) {
    //     console.log("pepepeppepepep",await this.driver.findElement(this.bodyStyleInput))
    //     await (await this.driver.findElement(this.bodyStyleInput)).click();
    //     await (await this.driver.findElement(this.nextButtVin)).click();
    // }
    //Ownership Status - Owned: labelForO |Financed: labelForF|Leased: labelForL
    await this.driver.wait(until.elementLocated(this.ownerShipStatus));
    await (await this.driver.findElement(this.ownerShipStatus)).click();
    await (await this.driver.findElement(this.nextButtVin)).click();

    // Primary use labelForC: Commute, Excluded: labelForP: Pleasure, labelForB: Business
    await this.driver.wait(until.elementLocated(this.primaryUseOption));
    await (await this.driver.findElement(this.primaryUseOption)).click();
    await (await this.driver.findElement(this.nextButtVin)).click();
    // Details on commute
    await this.driver.wait(until.elementLocated(this.daysPerWeekOptions));
    await (await this.driver.findElement(this.daysPerWeekSelect)).click();
    await (await this.driver.findElement(this.daysPerWeekSelect)).sendKeys(customers.daysPerWeek);
    await (await this.driver.findElement(this.milesInput)).click();
    await (await this.driver.findElement(this.milesInput)).sendKeys(customers.oneWayMiles);
    await (await this.driver.findElement(this.nextButtVin)).click();
    // click on next button when estimated annual mileage is calculated
    await this.driver.wait(until.elementLocated(this.annualMileage));
    await (await this.driver.findElement(this.nextButtVin)).click();
    // summary page continue
    await this.driver.wait(until.elementLocated(this.continueSummaryButton));
    await this.driver.wait(until.elementLocated(this.continueSummaryButton));
    await (await this.driver.findElement(this.continueSummaryButton)).click();
    // Let's get to know you gender in mock Male or Female
    await this.driver.wait(until.elementLocated(this.genderOptions));
    await (await this.driver.findElement(this.genderSelect)).click();
    await (await this.driver.findElement(this.genderSelect)).sendKeys(customers.gender);
    await (await this.driver.findElement(this.giveGenderNextButton)).click();
    // Maritial Status: Single, Excluded: Divorced, Married, Separated, Widowed
    await this.driver.wait(until.elementLocated(this.maritalStatusDrop));
    await (await this.driver.findElement(this.maritalStatusSelect)).click();
    await (await this.driver.findElement(this.maritalStatusSelect)).sendKeys(customers.status);


    //ssn there is no validation! it should be a bug!!
    await this.driver.wait(until.elementLocated(this.ssnFullInput));
    await (await this.driver.findElement(this.ssnFullInput)).click();
    await this.driver.findElement(this.ssnFullInput).sendKeys(customers.ssn);
    await (await this.driver.findElement(this.nextButtVin)).click();

    //home own labelForO for Own | labelForT for Rent
    await this.driver.wait(until.elementLocated(this.homeOwnOption));
    await (await this.driver.findElement(this.homeOwnOption)).click();
    await (await this.driver.findElement(this.nextButtVin)).click();
    // Current insurance, labelForN for No, I haven't needed insurance. Rest are excluded
    await this.driver.wait(until.elementLocated(this.currentInsurance));
    await (await this.driver.findElement(this.currentInsurance)).click();
    await (await this.driver.findElement(this.nextButtVin)).click();
    //First age licensed
    await this.driver.wait(until.elementLocated(this.drivingAge));
    await (await this.driver.findElement(this.drivingAge)).click();
    await this.driver.findElement(this.drivingAge).sendKeys(customers.ageFirstLicensed);
    await (await this.driver.findElement(this.nextButtVin)).click();
    // Education level, Only Bachelors is included; the rest are excluded 
    await this.driver.wait(until.elementLocated(this.educationLevel));
    await (await this.driver.findElement(this.educationSelect)).click();
    await (await this.driver.findElement(this.educationSelect)).sendKeys(customers.education);
    await (await this.driver.findElement(this.nextButtVin)).click();
    //affiliation, Does not Apply, others are excluded 
    await this.driver.wait(until.elementLocated(this.affiliationOption));
    await (await this.driver.findElement(this.affiliationOption)).click();
    await (await this.driver.findElement(this.nextButtVin)).click();
    //Employment Status, only A Private Company/Organization or Self Employed is included
    await this.driver.wait(until.elementLocated(this.emplymentOptions));
    await (await this.driver.findElement(this.employmentSelect)).click();
    await (await this.driver.findElement(this.employmentSelect)).sendKeys(customers.emplStatus);
    await (await this.driver.findElement(this.nextButtVin)).click();
    //Occupation in mock data as Ditetitian or nutritionist
    await this.driver.wait(until.elementLocated(this.occupationInput));
    await (await this.driver.findElement(this.occupationInput)).click();
    await this.driver.findElement(this.occupationInput).sendKeys(customers.occupation);
    await (await this.driver.findElement(this.nextButtVin)).click();
    //one driver in household
    await this.driver.wait(until.elementLocated(this.otherDriverNextButton));
    await (await this.driver.findElement(this.otherDriverNextButton)).click();
    // No incident
    console.log("helllo0o0o")
    setTimeout(async () => {
        await this.driver.wait(until.elementLocated(this.otherDriverNextButton));
        console.log("element is located")
        await (await this.driver.findElement(this.otherDriverNextButton)).click();
        console.log("element is clicked")
    }, 2000);
    // await this.driver.wait(until.elementLocated(this.otherDriverNextButton));
    // console.log("element is located")
    // await (await this.driver.findElement(this.otherDriverNextButton)).click();
    // console.log("element is clicked")

    // Not member of any organization
    await this.driver.wait(until.elementLocated(this.nextButtVin));
    await (await this.driver.findElement(this.nextButtVin)).click();
    //Enroll in drive safe? labelForNo for Maybe later, it is in mock
    await this.driver.wait(until.elementLocated(this.driveSafeEnroll));
    await (await this.driver.findElement(this.driveSafeEnroll)).click();
    await (await this.driver.findElement(this.nextButtVin)).click();
    //email, phone number is not required
    await this.driver.wait(until.elementLocated(this.emailInput));
    await (await this.driver.findElement(this.emailInput)).click();
    await this.driver.findElement(this.emailInput).sendKeys(customers.email);
    await (await this.driver.findElement(this.nextButtVin)).click();
    



















}


}

