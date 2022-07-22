const Employee = require('./employee.js')
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

module.exports = Intern;