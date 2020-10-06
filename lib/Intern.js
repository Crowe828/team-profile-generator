// Require Employee class
const Employee = require("./Employee.js");

// Specific traits to the Intern
class Intern extends Employee {
  // Needs everything from employee as well as their school
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // As well as change their role to Intern
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

// Export it
module.exports = Intern;
