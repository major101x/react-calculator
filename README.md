# React Calculator App

This is a calculator app built with React. The app allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It provides a user-friendly interface with buttons for digits, operators, and other functionalities.

## Features

- Basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.
- Buttons for digits 0 to 9 and a decimal point.
- A delete (DEL) button to remove the last entered character.
- An equals (=) button to calculate the result of the expression.
- Clear (AC) button to reset the calculator display.

## How to Use

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and go to `http://localhost:3000` to access the calculator app.

## Usage

- Click on the buttons to enter digits (0-9) and the decimal point.
- Use the operators (+, -, *, /) to perform arithmetic operations.
- Press the DEL button to delete the last entered character.
- Click the AC button to clear the calculator display.
- Press the = button to calculate the result of the expression.

## Notes

- The app uses the `eval()` function for expression evaluation. However, note that using `eval()` can be risky in certain scenarios. For production use, it's recommended to implement a custom expression parser or use a secure library for expression evaluation.
- The app applies some validation to handle specific edge cases, such as consecutive operators and multiple zeros at the beginning. However, additional input validation and error handling might be necessary for a more robust calculator.

## Contributing

Contributions are welcome! If you find any bugs, have feature suggestions, or want to improve the app, feel free to submit a pull request or open an issue.

## Credits

This project is a FreeCodeCamp project and was created by Olayiwola Aroyeun.