import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState('');

  const ops = ['+', '-', '*', '/'];

  const lastChar = calc.slice(-1);

  const createDigits = () => {
    const digits = [];
    const textDigits = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          id={textDigits[i]}
          onClick={() => updateDigits(i.toString())}
          key={i}
        >
          {i}
        </button>,
      );
    }
    return digits;
  };

  const updateDigits = (value) => {
    const lastChar = calc.slice(-1);

    // if (value === '.' && lastChar === '.') {
    //   return;
    // }

    // if (value === '.' && ops.includes(lastChar)) {
    //   setCalc((prevCalc) => prevCalc + '0' + value);
    //   return;
    // }

    if (value === '-' && calc === '') {
      setCalc('-');
      return;
    }

    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) &&
        ops.includes(lastChar) &&
        value !== '-' &&
        lastChar !== '-')
    ) {
      return;
    }

    // Solution for Test Case 10: Prevent multiple zeros at the beginning.
    if (value === '0' && calc === '0') {
      return;
    }

    setCalc((prevCalc) => prevCalc + value);
  };

  const calculateResult = () => {
    var filtered = calc.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
    try {
      // Use JavaScript's built-in parseFloat to handle floating-point numbers.
      const result = parseFloat(eval(filtered));
      setCalc(result.toString());
    } catch (error) {
      setCalc('Error');
    }
  };

  const clearDigits = () => {
    setCalc('');
  };

  // Solution for Test Case 9: Evaluate the expression correctly.
  const handleEqualClick = () => {
    calculateResult();
  };

  // Solution for Test Case 13: Handle consecutive operators correctly.
  const handleOperatorClick = (value) => {
    if (value === '-' && calc.endsWith('-')) {
      // Allow only one negative sign at the end.
      return;
    }

    setCalc((prevCalc) => prevCalc + value);
  };

  const decimal = () => {
    const splitted = calc.split(/[\+\*\-\/]/);
    const last = splitted.splice(-1)[0];
    if (!last.includes('.')) {
      setCalc((prevCalc) => prevCalc + '.');
    }
  };

  console.log(lastChar);

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="display">
          {calc || '0'}
        </div>
        <div id="buttons">
          <div className="operators">
            <button id="clear" onClick={clearDigits}>
              AC
            </button>
            <button id="divide" onClick={() => handleOperatorClick('/')}>
              /
            </button>
            <button id="multiply" onClick={() => handleOperatorClick('*')}>
              *
            </button>
          </div>
          <div className="flex-container">
            <div className="digits">
              {createDigits()}
              <button id="zero" onClick={() => updateDigits('0')}>
                0
              </button>
              <button id="decimal" onClick={decimal}>
                .
              </button>
              <button onClick={() => setCalc(calc.slice(0, -1))}>DEL</button>
            </div>
            <div className="right-btns">
              <button id="add" onClick={() => handleOperatorClick('+')}>
                +
              </button>
              <button id="subtract" onClick={() => handleOperatorClick('-')}>
                -
              </button>
              {/* Solution for Test Case 9: Evaluate the expression correctly. */}
              <button id="equals" onClick={handleEqualClick}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
