// Require all necessary files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Targets the output folder
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Renders the uer's answers into HTML
const render = require("./lib/htmlRenderer");

// Where the employee objects will be stored
const teamMembers = [];

// Entire interface
function mainMenu() {
  // Start by creating the manager
  function createManager() {
    console.log("Please build your team");
    inquirer
      .prompt([
        // Manager Name
        {
          type: "input",
          name: "managerName",
          message: "What is your manager's name?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            // So that you must enter something
            return "Please enter your manager's name";
          },
        },
        // Manager ID
        {
          type: "input",
          name: "managerId",
          message: "What is your manager's ID number?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please enter your manager's ID number";
          },
        },
        // Manager Email
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email address?",
          // Make sure the user enters a valid email address
          validate: (answers) => {
            const pass = answers.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email address";
          },
        },
        // Manager Office Number
        {
          type: "input",
          name: "officeNumber",
          message: "What is your manager's office number?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please enter your manager's office number";
          },
        },
      ])
      // After all questions have been answered, create a new object with them
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.officeNumber
        );
        // Push the new object to the empty array
        teamMembers.push(manager);
        moreEmployees();
      });
  }
  // So that we always create the manager first
  createManager();

  // Coode to create Engineer
  function createEngineer() {
    inquirer
      // Engineer Name
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your engineer's name";
          },
        },
        // Engineer ID
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's ID number?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your engineer's ID number";
          },
        },
        // Engineer Email
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email address?",
          // Make sure the user enters a valid email address
          validate: (answers) => {
            const pass = answers.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email address";
          },
        },
        // Engineer GitHub
        {
          type: "input",
          name: "engineerGit",
          message: "What is your engineer's github username?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your engineer's github username";
          },
        },
      ])
      // Create a new object with the user's input
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGit
        );
        // Push it to the array
        teamMembers.push(engineer);
        moreEmployees();
      });
  }

  // Code to create Intern
  function createIntern() {
    inquirer
      // Intern Name
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your intern's name";
          },
        },
        // Intern ID
        {
          type: "input",
          name: "internId",
          message: "What is your intern's ID number?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your intern's ID number";
          },
        },
        // Intern Email
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email address?",
          // Make sure the user enters a valid email address
          validate: (answers) => {
            const pass = answers.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email address";
          },
        },
        // Intern School
        {
          type: "input",
          name: "internSchool",
          message: "What university did your intern attend?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your intern's school";
          },
        },
      ])
      // Create an object
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        // Push it to the array
        teamMembers.push(intern);
        moreEmployees();
      });
  }

  // After the user creates a manager
  // This can be repeated indefinitely
  function moreEmployees() {
    inquirer
      // Ask the user if they want to create another employee
      .prompt([
        {
          type: "list",
          name: "nextEmployee",
          message: "Would you like to add more team members?",
          choices: ["Engineer", "Intern", "Nope, my team is complete!"],
        },
      ])
      // If the user selects
      .then((answers) => {
        // Will begin the prompt for engineer
        if (answers.nextEmployee === "Engineer") {
          createEngineer();
        }
        // Will begin the prompt for intern
        if (answers.nextEmployee === "Intern") {
          createIntern();
        }
        // If the user selects they are done adding employees, the prompt is over
        if (answers.nextEmployee === "Nope, my team is complete!") {
          console.log("All set!");
          console.log(teamMembers);

          // Write the HTML to the files
          fs.writeFile(outputPath, render(teamMembers), function (err) {
            if (err) {
              throw err;
            }
          });
        }
      });
  }
}
// Displays first
mainMenu();
