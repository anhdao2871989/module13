/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  let celsius = (parseFloat(fahren) - 32) * (5/9); // Convert input to a number
  return celsius;
}

/**
 * Takes both numbers (F, C) and displays a message with
 * both numbers and how that temp makes you feel using
 * this chart`
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {

  if (fahren < 32) {
    return `The temperature is ${fahren}F (${celc}C) and it feel very cold `;
  } 
  else if (fahren < 64) {
    return `The temperature is ${fahren}F (${celc}C) and it feel cold`;
  } 
  else if (fahren < 86) {
    return `The temperature is ${fahren}F (${celc}C) and it feel hot`;
  } 
  else if (fahren < 100) {
    return `The temperature is ${fahren}F (${celc}C) and it feel very Hot`;
  } 
  
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "Enter a number, we will convert that number from Fahrenheit to Celsius"
);
fahren = parseFloat(fahren); // Convert the input to a floating-point number
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Let's try that again. Enter a number, we will convert that number from Fahrenheit to Celsius"
);
fahren = parseFloat(fahren); // Convert the input to a floating-point number
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
