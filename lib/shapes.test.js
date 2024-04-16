const { Shape, Circle, Square, Triangle } = require('./shapes.js');
const shape = new Shape('abc', 'blue', 'white');
const circle = new Circle('WJG', 'blue', 'white');
const square = new Square('WJG', 'blue', 'white');
const triangle = new Triangle('WJG', 'blue', 'white');



describe('Shape Render', () => {
    test('throws on shape obj', () => {
        expect(() => {
            shape.render();
        }).toThrow();
    });
    test('renders for Circle', () => {
        expect(circle.text).toBe("WJG");
    });
    test('throws on generateLogo', () => {
        expect(() => {
            shape.generateLogo();
        }).toThrow();
    });

    test('renders for Circle', () => {
        expect(circle.render()).toBe(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="95" fill="white" />
            <circle cx="150" cy="100" r="90" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">WJG</text>
        </svg>
        `);
    });
    test('renders for square', () => {
        expect(square.render()).toBe(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="186" height="186" x="57" y="7" fill="white" />
            <rect width="180" height="180" x="60" y="10" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">WJG</text>
        </svg>
        `);
    });
    test('renders for triangle', () => {
        expect(triangle.render()).toBe(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="46,190 150,10 254,190" style="fill:blue" />
            <polygon points="124,55 150,10 176,55" style="fill:white" />
            <polygon points="46,190 72,145 98,190" style="fill:white" />
            <polygon points="202,190 228,145 254,190" style="fill:white" />
            <text x="150" y="163" font-size="45" text-anchor="middle" fill="white">WJG</text>
        </svg>
        `);
    });

})

