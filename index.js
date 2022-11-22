// Declare depencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('./lib/Employee');
// TODO: Require lib functions (Manager, engineer, etc.)
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Declare variables
const teamMembers = [];
const idArray = [];

// Give usage prompt
console.log(
    '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder.\n'
)

// Initiate inquirer prompts for team information
