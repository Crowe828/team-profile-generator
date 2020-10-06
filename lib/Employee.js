// General class for everyone
class Employee {
  // Collects every employee's name, id, and email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  // Default role is employee, will be overridden
  getRole() {
    return "Employee";
  }
}

// Export it to be used elsewhere
module.exports = Employee;
