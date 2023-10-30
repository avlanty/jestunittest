// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1.07 Dollars should be 156.5 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(3.21);

    // If 156.5 yen is 1.07 dollars, then 502.36 yen should be (156.5 * 3.21)
    const expected = 156.5 * 3.21; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.21)).toBe(502.365);
})

test("156.5 Yen should be 0.87 Pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromYenToPound(782.5);

    // If 156.5 yen is 0.87 pound, then 782.5 yen should be (782.5 * 0.87)
    const expected = 782.5 * 0.87;
    
    // This is the comparison for the unit test
     expect(fromYenToPound(782.5)).toBe(680.775);
})