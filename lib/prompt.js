const inquirer = require('inquirer')
const colorList = require('./validcolors.js')
const {Circle, Square, Triangle} = require('./shapes.js')


function getLogoInfo() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter up to 3 charachters for your logo',
                name: 'text',
                validate: checkLength

            },
            {
                type: 'list',
                message: 'What shape do you want your logo to be?',
                name: 'shape',
                choices: ['circle', 'square', 'triangle']
            },
            {
                type: 'input',
                message: 'Enter a background color for your logo',
                name: 'bgColor',
                validate: validColor
            },
            {
                type: 'input',
                message: 'Enter a text color for your logo',
                name: 'textColor',
                validate: validColor

            }
        ])
}

async function checkLength(input) {
    if (input.length > 3) {
        return 'Too Long ';
    } else if (input.length == 0) {
        return 'Too short'
    }
    return true;
}

async function validColor(input) {
    if (colorList.includes(input.toLowerCase())) {
        return true; // Input is a valid color from the list
    } else if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input)) {
        return true; // Input is a valid hex color
    } else {
        return 'Please enter a valid color from the list or a hexadecimal color code.';
    }
}

function makeSVG(logoInfo) {
    let shape
    switch (logoInfo.shape) {
        case 'circle':
            shape = new Circle(logoInfo.text, logoInfo.bgColor, logoInfo.textColor)
            break;
        case 'square':
            shape = new Square(logoInfo.text, logoInfo.bgColor, logoInfo.textColor)
            break;
        case 'triangle':
            shape = new Triangle(logoInfo.text, logoInfo.bgColor, logoInfo.textColor)
            break;
    }
    shape.generateLogo('./test.svg')
}

module.exports = {getLogoInfo, makeSVG}
