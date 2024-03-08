# Data Validation Package

This is a simple JavaScript package for data validation. It provides functions to validate various data types such as email, number, string, array, boolean, and date.

## Installation

To install the package, you can use npm:

```bash
npm install --save <your-package-name>
```

Replace `<your-package-name>` with the actual name you choose for your npm package.

## Usage

You can import and use the validation functions in your JavaScript code as follows:

```javascript
const { validateEmail, validateNumber, validateString, validateArray, validateBoolean, validateDate } = require('<your-package-name>');

console.log(validateEmail('example@example.com')); // true
console.log(validateNumber(42)); // true
console.log(validateString('Hello, world!')); // true
console.log(validateArray([1, 2, 3])); // true
console.log(validateBoolean(true)); // true
console.log(validateDate(new Date())); // true
```

## Available Validation Functions

- `validateEmail(email)`: Validates if the provided string is in a valid email format.
- `validateNumber(value)`: Validates if the provided value is a number.
- `validateString(value)`: Validates if the provided value is a string.
- `validateArray(value)`: Validates if the provided value is an array.
- `validateBoolean(value)`: Validates if the provided value is a boolean.
- `validateDate(value)`: Validates if the provided value is a date.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.