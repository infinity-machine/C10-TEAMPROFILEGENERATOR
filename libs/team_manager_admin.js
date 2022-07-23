// REQUIRE EMPLOYEE
const Employee = require('./employee.js')

// CLASS TEAM MANAGER ADMIN
class TeamMngrAdmin extends Employee {
    constructor(name, empID, eMail, officeNum) {
        super(name, empID, eMail)
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        console.log(this.officeNum)
    }
    getRole() {
        console.log('Team Manager')
    }
}

// EXPORTS
module.exports = TeamMngrAdmin;

