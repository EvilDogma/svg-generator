const fs = require('fs')

class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text
        this.shapeColor = shapeColor
        this.textColor = textColor
    }
    render() {
        throw new Error('use a child method')
    }
    generateLogo(path) {
        fs.writeFile(path, this.render(), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("Generated logo.svg\n");
            }
        })
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="95" fill="${this.textColor}" />
            <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="186" height="186" x="57" y="7" fill="${this.textColor}" />
            <rect width="180" height="180" x="60" y="10" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }
    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="46,190 150,10 254,190" style="fill:${this.shapeColor}" />
            <polygon points="124,55 150,10 176,55" style="fill:${this.textColor}" />
            <polygon points="46,190 72,145 98,190" style="fill:${this.textColor}" />
            <polygon points="202,190 228,145 254,190" style="fill:${this.textColor}" />
            <text x="150" y="163" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}
module.exports = { Shape, Circle, Square, Triangle };