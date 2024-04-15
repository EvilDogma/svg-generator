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
    generateLogo(path){
        console.log('here')
        console.log(this.render())
        fs.writeFile(path,this.render(),(err) => {
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
            <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
            <text x="150" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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
        return`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="46,190 150,10 254,190" style="fill:${this.shapeColor}" />
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}
module.exports = {Shape, Circle, Square, Triangle};