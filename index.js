// Declare depencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// TODO: Require lib functions (Manager, engineer, etc.)
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Declare variables
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const generateTeam = require("./src/page-template.js")

const teamMembers = [];
const render = require('./src/page-template.js');

// Give usage prompt
console.log(
    '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder.\n'
)

// Initiate inquirer prompts for team information

function appStart() {
    function createTeam() {
        inquirer.prompt([{
            type: "list",
            message: "Select the type of employee you would like to add to your team",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "None"]
        }])
        .then(function (input) {
            switch(input.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                
                default:
                    buildTeam();
            }
        })
    }

    function addManager(){
        inquirer.prompt ([
        {    
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
              },
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's Email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
              },
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                return true;
              }
              return 'Please enter a positive number greater than zero.';
            },
        },
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            createTeam()
        })
    }

    function addEngineer(){
        inquirer.prompt ([
        {    
            type: 'input',
            name: 'engName',
            message: "What is the team engineer's name?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: 'input',
            name: 'engId',
            message: "What is the team engineer's id?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
              },
        },
        {
            type: 'input',
            name: 'engEmail',
            message: "What is the team engineer's Email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
              },
        },
        {
            type: 'input',
            name: 'engGithub',
            message: "What is the team engineer's GitHub?",
            validate: (answer) => {
              const pass = answer.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i); 
            //   find github username regex
              if (pass) {
                return true;
              }
              return 'Please enter a valid GitHub username';
            },
        },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
            teamMembers.push(engineer);
            createTeam()
        })
    }

    function addIntern(){
        inquirer.prompt ([
        {    
            type: 'input',
            name: 'intName',
            message: "What is the team intern's name?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: 'input',
            name: 'intId',
            message: "What is the team intern's id?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
              },
        },
        {
            type: 'input',
            name: 'intEmail',
            message: "What is the team intern's Email?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
              },
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "What is the team intern's school name?",
            validate: (answer) => {
              const pass = answer.match(/^[A-Za-z\s]*$/); 
            //   find github username regex
              if (pass) {
                return true;
              }
              return 'Please enter a valid school name';
            },
        },
        ])
        .then(answers => {
            const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool);
            teamMembers.push(intern);
            createTeam()
        })
    }
    function buildTeam() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
            }
            fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
    
            console.log("Team created successfully!")
    }

createTeam();
}




appStart();
