// Employee parent class

// Properties:
    // name
    // id
    // email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Methods:
    // getName()
    getName() {
        return this.name;
    }

    // getId()

    getId() {
        return this.id;
    }
    // getEmail()

    getEmail() {
        return this.email;
    }

    // getRole -> "Employee"
    getRole() {
        return "Employee"
    }
}
module.exports = Employee;

