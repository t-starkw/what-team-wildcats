// Manager class

const Employee = require("./Employee");

// Other properties and methods:
    // officeNumber
    // getOfficeNumber()

// Extends from employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
// getRole -> overrides "Employee" to return "Manager"
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;