// Engineer class
const Employee = require("./Employee");

// Other properties and methods:
    // github
    // getGithub()

// Extends from employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }
    getGithub() {
        return this.github;
    }
// getRole() -> overrides "Employee" output to return "Engineer"
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
