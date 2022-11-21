// Declare depencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// TODO: Require lib functions (Manager, engineer, etc.)

// Declare variables
const teamMembers = [];
const idArray = [];

// Give usage prompt
console.log(
    '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder.\n'
)

// Initiate inquirer prompts for team information
