// REQUIRES
const inquirer = require('inquirer');
const fs = require('fs');
const figlet = require('figlet');
const chalk = require('chalk');
const TeamMngr = require('./libs/team_manager');
const TeamMngrAdmin = require('./libs/team_manager_admin')
const Engineer = require('./libs/engineer.js');
const Intern = require('./libs/intern.js');
const createTemplate = require('./libs/publish.js')
const {
    setUpPrompt, menuPrompt, addTMPrompt, addEngPrompt, addIntPrompt,
} = require('./libs/prompts.js');

// PUBLISH TEAM
const toPublish = [];
// .map, .join, somethin like that process the data then write to page using template literal
function publishTeam() {
    fs.writeFile('team.html', createTemplate(toPublish),
        err => (err ? console.error(err) : console.log('TEAM PUBLISHED!'))
    );
};
// CREDITS
function displayCredits() {
    launchProgram().then(menu)
};

// ADD INTERN
function addInt() {
    return inquirer.prompt(addIntPrompt)
        .then((data) => {
            let { intName, intEmpID, intEMail, intSchool } = data;
            int = new Intern(intName, intEmpID, intEMail, intSchool);
            toPublish.push(int);
            console.log(`INTERN ${intName} ADDED TO TEAM ROSTER!`)
            menu();
        });
}

// ADD ENGINEER
function addEng() {
    return inquirer.prompt(addEngPrompt)
        .then((data) => {
            let { engName, engEmpID, engEMail, engGitHub } = data;
            let eng = new Engineer(engName, engEmpID, engEMail, engGitHub);
            toPublish.push(eng);
            console.log(`ENGINEER ${engName} ADDED TO TEAM ROSTER!`)
            menu();
        });
}

// ADD TEAM MANAGER
function addTM() {
    return inquirer.prompt(addTMPrompt)
        .then((data) => {
            let { tMName, tMEmpID, tMEMail, tMOfficeNum } = data;
            let tM = new TeamMngr(tMName, tMEmpID, tMEMail, tMOfficeNum);
            toPublish.push(tM);
            console.log(`TEAM MANAGER ${tMName} ADDED TO TEAM ROSTER!`)
            menu();

        });
}

// MAIN MENU
function menu() {
    return inquirer.prompt(menuPrompt)
        .then((data) => {
            if (data.mainMenu === 'ADD NEW TEAM MANAGER') {
                addTM();
            }
            if (data.mainMenu === 'ADD NEW ENGINEER') {
                addEng();
            }
            if (data.mainMenu === 'ADD NEW INTERN') {
                addInt();
            }
            if (data.mainMenu === 'PUBLISH TEAM') {
                publishTeam();
            }
            if (data.mainMenu === 'CREDITS') {
                displayCredits();
            }
            if (data.mainMenu === 'END PROGRAM') {
                process.exit(0);
            }
        });
};

// SET UP / ADD TEAM MANAGER ADMIN
function setUptMA() {
    return inquirer.prompt(setUpPrompt)
        .then((data) => {
            let { tMAName, tMAEmpID, tMAEMail, tMAOfficeNum } = data;
            tMA = new TeamMngrAdmin(tMAName, tMAEmpID, tMAEMail, tMAOfficeNum);
            toPublish.push(tMA);
            console.log(`HELLO ${tMAName}!\nYOU ARE NOW AT THE MAIN MENU\nSELECT AN OPTION TO PROCEED`);
        });
};

// BANNER ON PROGRAM LAUNCH
function launchProgram() {
    figlet('TEAMPROFILEGENERATORBOT', function (err, banner) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(chalk.blue(banner));
        console.log('TEAMPROFILEGENERATORBOT COPYRIGHT 2022 SHLERM INDUSTRIAL SOLUTIONS CORPORATION');
    });
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

// CALLS
launchProgram()
    .then(setUptMA)
    .then(menu);

    module.exports = toPublish;