const inquirer = require('inquirer')
const fs = require('fs')
const figlet = require('figlet');
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



setupScript = [{
    type: 'input',
    name: '1',
    message: 'TEAMPROFILEGENERATORBOT WILL GENERATE FOR YOU A VERY GOOD TEAM PROFILE!\nTYPE OK TO PROCEED',
    validate: (answer) => {
        if (answer === 'ok') {return true}
        else {return 'ENTER OK TO PROCEED!'}
    }
},
{
    type: 'input',
    name: '2',
    message: 'WELCOME TEAM MANAGER ADMIN!\nENTER YOUR FULL NAME TO PROCEED'
},
{
    type: 'input',
    name: '3',
    message: 'THE FOLLOWING QUESTIONS ARE FOR YOUR TEAM MANAGER ADMIN PROFILE\nTYPE OK TO PROCEED',
    validate: (answer) => {
        if (answer === 'ok') {return true}
        else {return 'ENTER OK TO PROCEED!'}
    }
},
{
    type: 'input',
    name: '4',
    message: 'ENTER YOUR EMPLOYEE IDENTIFICATION NUMBER TO PROCEED'
},
{
    type: 'input',
    name: '5',
    message: 'ENTER YOUR EMAIL ADDRESS TO PROCEED'
},
{
    type: 'input',
    name: '6',
    message: 'ENTER YOUR OFFICE NUMBER TO PROCEED'
}]
// // // // // // // //
menuScript = [{
    type: 'input',
    name: '0',
    message: 'ENTER YOUR EMAIL ADDRESS TO PROCEED'
}]


function launchProgram() {
    figlet('TEAMPROFILEGENERATORBOT', function(err, banner) {
        if (err) {
            console.log('something went wrong...');
            return;
        }
        console.log(banner)
        console.log('TEAMPROFILEGENERATORBOT COPYRIGHT 2022 SHLERM INDUSTRIAL SOLUTIONS CORPORATION')
    })
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000)
    });
}

async function introTPGB() {
    await launchProgram();
    inquirer.prompt(setupScript).then((data) => console.log(data));
}

introTPGB()









// inquirer.prompt(introUI).then((data) => console.log(data));

// async function menuTPGB() {
//     const menu = await inquirerl
// }
// async function beginTPGB() {
//     const adminData = inquirer.prompt(introUI)
// }