// dataValidation.js

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Function to validate if a value is a number
  function validateNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  
  // Function to validate if a value is a string
  function validateString(value) {
    return typeof value === 'string';
  }
  
  // Function to validate if a value is an array
  function validateArray(value) {
    return Array.isArray(value);
  }
  
  // Function to validate if a value is a boolean
  function validateBoolean(value) {
    return typeof value === 'boolean';
  }
  
  // Function to validate if a value is a date
  function validateDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
  }
  
  // Exporting validation functions
  module.exports = {
    validateEmail,
    validateNumber,
    validateString,
    validateArray,
    validateBoolean,
    validateDate
  };


  const { validateEmail, validateNumber, validateString, validateArray, validateBoolean, validateDate } = require('<your-package-name>');

console.log(validateEmail('example@example.com')); // true
console.log(validateNumber(42)); // true
console.log(validateString('Hello, world!')); // true
console.log(validateArray([1, 2, 3])); // true
console.log(validateBoolean(true)); // true
console.log(validateDate(new Date())); // true