// EMPLOYEES
class Employee {
    constructor(name, empID, eMail) {
        this.name = name;
        this.empID = empID;
        this.eMail = eMail;
    }
    getName() {
        console.log(this.name)
    }
    getID() {
        console.log(this.empID)
    }
    getEMail() {
        console.log(this.eMail)
    }
    getRole() {
        console.log('employee')
    }
}

module.exports = Employee;