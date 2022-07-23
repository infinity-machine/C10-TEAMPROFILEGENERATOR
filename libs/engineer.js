// REQUIRE EMPLOYEE
const Employee = require('./employee.js')

// CLASS ENGINEER
class Engineer extends Employee {
    constructor(name, empID, eMail, gitHub) {
        super(name, empID, eMail)
        this.gitHub = gitHub;
    }
    getGitHub() {
        console.log(this.gitHub)
    }
    getRole() {
        console.log('Engineer')
    }
}

// EXPORTS
module.exports = Engineer; 