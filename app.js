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
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please enter your manager's name";
          },
        },
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
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email address?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please enter your manager's address";
          },
        },
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
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.officeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        moreEmployees();
      });
  }
  createManager();

  function createEngineer() {
    inquirer
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
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email address?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your engineer's email address";
          },
        },
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
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGit
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        moreEmployees();
      });
  }

  function createIntern() {
    inquirer
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
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email address?",
          validate: (answers) => {
            if (answers !== "") {
              return true;
            }
            return "Please your intern's email address";
          },
        },
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
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internEmail,
          answers.internId,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        moreEmployees();
      });
  }

  function moreEmployees() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "nextEmployee",
          message: "Would you like to add more team members?",
          choices: ["Engineer", "Intern", "Nope, my team is complete!"],
        },
      ])
      .then((answers) => {
        if (answers.nextEmployee === "Engineer") {
          createEngineer();
        }
        if (answers.nextEmployee === "Intern") {
          createIntern();
        }
        // If the user selects they are done adding employees, the prompt is over
        if (answers.nextEmployee === "Nope, my team is complete!") {
          console.log("All set!");
          console.log(idArray);
          console.log(teamMembers);
          // Make sure render function is working
          console.log(render(teamMembers));
          
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
mainMenu();

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location. You may need to check if the `output` folder exists and create it if it does not

// Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work.
