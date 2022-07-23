// REQUIRE EMPLOYEE
const Employee = require('./employee.js')

// CLASS INTERN
class Intern extends Employee {
    constructor(name, empID, eMail, school) {
        super(name, empID, eMail)
        this.school = school;
    }
    getSchool() {
        console.log(this.school)
    }
    getRole() {
        console.log('Intern')
    }
}

// EXPORTS
module.exports = Intern;