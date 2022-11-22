// Intern class
const Employee = require("./Employee");

// Other properties and methods:
    // school
    // getSchool()

// Extends from employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
// getRole() -> overrides "Employee" to return "Intern"
    getRole() {
        return "Intern"
    }
}
module.exports = Intern;