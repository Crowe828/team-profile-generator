// Specific properties to the manager
const Employee = require("./Employee.js");

// Extends from employee class
class Manager extends Employee {
  // Needs everything from employee as well as office number
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // As well as change their role to Manager
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Export it
module.exports = Manager;
