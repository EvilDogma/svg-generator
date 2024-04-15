const { Shape, Circle, Square, Triangle } = require('./shapes.js');
const shape = new Shape('abc', 'blue', 'white');
const circle = new Circle('WJG', 'blue', '#fcba03');
const square = new Square('WJG', 'blue', 'white');
const triangle = new Triangle('WJG', 'blue', 'white');
console.log(square)
console.log(square.render())
circle.generateLogo('./test.svg')
// square.generateLogo('./test.svg')
// triangle.generateLogo('./test.svg')


// describe('Shape Render', () => {
//     test('throws on shape obj', () => {
//         expect(() => {
//             shape.render();
//         }).toThrow();
//     });
//     test('renders for Circle', () => {
//         expect(circle.text).toBe("abc");
//     });

//     test('renders for Circle', () => {
//         expect(circle.render()).toBe(`
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="75" cy="50" r="40" fill="blue" />
//             <text x="75" y="60" font-size="30" text-anchor="middle" fill="white">abc</text>
//         </svg>
//         `);
//     });
//     test('renders for square', () => {
//         expect(square.render()).toBe(`
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//             <rect width="100%" height="100%" fill="blue" />
//             <text x="75" y="60" font-size="30" text-anchor="middle" fill="white">abc</text>
//         </svg>
//         `);
//     });
//     test('renders for triangle', () => {
//         expect(triangle.render()).toBe(`
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//             <polygon points="46,10 150,190 254,10" style="fill:blue" />
//             <text x="75" y="60" font-size="30" text-anchor="middle" fill="white">abc</text>
//         </svg>
//         `);
//     });

// })

