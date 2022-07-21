const inquirer = require('inquirer')
const fs = require('fs')
// PEOPLE
function TeamMngr(name, empID, eMail, officeNum) {
    this.name = name;
    this.empID = empID;
    this.eMail = eMail;
    this.officeNum = officeNum;
}
function Engineer(name, empID, eMail, gitHub) {
    this.name = name;
    this.empID = empID;
    this.eMail = eMail;
    this.gitHub = gitHub;
}
function Intern(name, empID, eMail, school) {
    this.name = name;
    this.empID = empID;
    this.eMail = eMail;
    this.school = school;
}

TeamMngr.prototype.hiHowAreYou = function() {
    console.log(`shalom! my name is ${this.name} duuude!`)
}
// function validateOK(res) {
//     if (res === 'ok') {return true}
//     else {return 'ENTER OK TO PROCEED!'}
//  }


// UI
introUI = [{
    type: 'input',
    name: '1',
    message: 'TEAMPROFILEGENERATORBOT COPYRIGHT 2022 SHLERM INDUSTRIES CORPORATION\nTYPE OK TO PROCEED',
    validate: (answer) => {
        if (answer === 'ok') {return true}
        else {return 'ENTER OK TO PROCEED!'}
    }
},
{
    type: 'input',
    name: '2',
    message: 'TEAMPROFILEGENERATORBOT WILL GENERATE FOR YOU A VERY GOOD TEAM PROFILE!\nTYPE OK TO PROCEED',
    validate: (answer) => {
        if (answer === 'ok') {return true}
        else {return 'ENTER OK TO PROCEED!'}
    }
},
{
    type: 'input',
    name: '3',
    message: 'WELCOME TEAM MANAGER ADMIN!\nENTER YOUR FULL NAME TO PROCEED'
},
{
    type: 'input',
    name: '4',
    message: 'THE FOLLOWING QUESTIONS ARE FOR YOUR TEAM MANAGER ADMIN PROFILE\nTYPE OK TO PROCEED',
    validate: (answer) => {
        if (answer === 'ok') {return true}
        else {return 'ENTER OK TO PROCEED!'}
    }
},
{
    type: 'input',
    name: '5',
    message: 'ENTER YOUR EMPLOYEE IDENTIFICATION NUMBER TO PROCEED'
},
{
    type: 'input',
    name: '6',
    message: 'ENTER YOUR EMAIL ADDRESS TO PROCEED'
},
{
    type: 'input',
    name: '7',
    message: 'ENTER YOUR OFFICE NUMBER TO PROCEED'
}]

inquirer.prompt(introUI).then((data) => console.log(data))
