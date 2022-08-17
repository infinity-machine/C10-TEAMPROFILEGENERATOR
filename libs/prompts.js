//PROMPTS
const inquirer = require('inquirer')

// VALIDATION FUNCTIONS
//create answer validation functions here to call in prompt 



// SET UP ADMIN
const setUpPrompt = [{
    type: 'input',
    name: 'ok1',
    message: 'ENTER OK TO PROCEED',
    validate: (answer) => {
        if (answer === 'ok') { return true }
        else { return 'YOU MUST ENTER OK TO PROCEED!' }
    }
},
{
    type: 'input',
    message: 'THE FOLLOWING QUESTIONS ARE FOR YOUR TEAM MANAGER ADMIN PROFILE\nENTER OK TO PROCEED',
    name: 'ok2',
    validate: (answer) => {
        if (answer === 'ok') { return true }
        else { return 'YOU MUST ENTER OK TO PROCEED!' }
    }
},
{
    type: 'input',
    name: 'tMAName',
    message: 'WELCOME TEAM MANAGER ADMIN!\nENTER YOUR FULL NAME'
},
{
    type: 'input',
    name: 'tMAEmpID',
    message: 'ENTER YOUR EMPLOYEE IDENTIFICATION NUMBER'
},
{
    type: 'input',
    name: 'tMAEMail',
    message: 'ENTER YOUR EMAIL ADDRESS'
},
{
    type: 'input',
    name: 'tMAOfficeNum',
    message: 'ENTER YOUR OFFICE NUMBER'
}]
// MAIN MENU
const menuPrompt = [{
    type: 'list',
    name: 'mainMenu',
    message: '~MAIN MENU~',
    choices: [
        'ADD NEW TEAM MANAGER',
        new inquirer.Separator(),
        'ADD NEW ENGINEER',
        new inquirer.Separator(),
        'ADD NEW INTERN',
        new inquirer.Separator(),
        'PUBLISH TEAM',
        new inquirer.Separator(),
        'CREDITS',
        new inquirer.Separator(),
        'END PROGRAM',
        new inquirer.Separator(),
    ]
}]

// ADD TEAM MANAGER
const addTMPrompt = [{
    type: 'input',
    name: 'tMName',
    message: 'ENTER FULL NAME OF NEW TEAM MANAGER'
},
{
    type: 'input',
    name: 'tMEmpID',
    message: 'ENTER EMPLOYEE IDENTIFICATION NUMBER OF NEW TEAM MANAGER'
},
{
    type: 'input',
    name: 'tMEMail',
    message: 'ENTER EMAIL ADRESS OF NEW TEAM MANAGER'
},
{
    type: 'input',
    name: 'tMOfficeNum',
    message: 'ENTER OFFICE NUMBER OF NEW TEAM MANAGER'
}]

// ADD ENGINEER
const addEngPrompt = [{
    type: 'input',
    name: 'engName',
    message: 'ENTER FULL NAME OF NEW ENGINEER'
},
{
    type: 'input',
    name: 'engEmpID',
    message: 'ENTER EMPLOYEE IDENTIFICATION NUMBER OF NEW ENGINEER'
},
{
    type: 'input',
    name: 'engEMail',
    message: 'ENTER EMAIL ADRESS OF NEW ENGINEER'
},
{
    type: 'input',
    name: 'engGitHub',
    message: 'ENTER GITHUB USERNAME OF NEW ENGINEER'
}]

// ADD INTERN
const addIntPrompt = [{
    type: 'input',
    name: 'intName',
    message: 'ENTER FULL NAME OF NEW INTERN'
},
{
    type: 'input',
    name: 'intEmpID',
    message: 'ENTER EMPLOYEE IDENTIFICATION NUMBER OF NEW INTERN'
},
{
    type: 'input',
    name: 'intEMail',
    message: 'ENTER EMAIL ADRESS OF NEW INTERN'
},
{
    type: 'input',
    name: 'intSchool',
    message: 'ENTER SCHOOL OF NEW INTERN'
}]

// EXPORTS
module.exports = {
    setUpPrompt,
    menuPrompt,
    addTMPrompt,
    addEngPrompt,
    addIntPrompt
}
