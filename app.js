const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function mainMenu() {
  function createManager() {
    console.log("Please build your team");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your manager's name";
            // if id includes
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is your manager's ID number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your manager's ID number";
            // if id includes
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email address?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your manager's address";
            // if id includes
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your manager's office number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your manager's office number";
            // if id includes
          },
        },
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your engineer's name";
            // if id includes
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's ID number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your engineer's ID number";
            // if id includes
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email address?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your engineer's email address";
            // if id includes
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is your engineer's github username?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your engineer's github username";
            // if id includes
          },
        },
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your intern's name";
            // if id includes
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's ID number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your intern's ID number";
            // if id includes
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email address?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your intern's email address";
            // if id includes
          },
        },
        {
          type: "input",
          name: "school",
          message: "What university did your intern attend?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please your intern's school";
            // if id includes
          },
        },
      ])
      .then((answer) => {
        const manager = new Manager(answers.id);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
      });
  }
  createManager();
}

mainMenu();

// Write code to use inquirer to gather information about the development team members and to create objects for each team member (using the correct classes as blueprints)

// After the user has input all employees, call the `render` function (required above) and pass in an array containing all employee objects. The `render` function will generate and return a block of HTML including templated divs for each employee

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location. You may need to check if the `output` folder exists and create it if it does not

// Write your code to ask different questions via inquirer depending on employee type

// e sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work.
