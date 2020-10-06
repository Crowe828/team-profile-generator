// Require the Employee class
const Employee = require("./Employee.js");

// Traits specific to Engineer
class Engineer extends Employee {
  // Requires everything from Employe as well as their GitHub profile
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // And changes their role to Engineer
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

// Export it
module.exports = Engineer;
