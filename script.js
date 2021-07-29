const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  if (operator === '+') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === '-') {
    result = parseFloat(n1)- parseFloat(n2);
  } else if (operator === '*') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === '/') {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return String(result);
}

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum, a;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  
  if (target.matches('button')) {
    if (action === 'number') {
      if (display.textContent === '0' || previousKey === '+' || previousKey === '-' || previousKey === '*' || previousKey === '/') {
        firstNum = display.textContent = buttonContent;
      } else if (display.textContent !== '0'){
      firstNum = display.textContent = display.textContent + buttonContent;
      }
    }
    if (action === 'operator') {
      previousKey = buttonContent;
      previousNum = firstNum;
      display.textContent = firstNum;
      
    }
    if (action === 'decimal') {

    }
    if (action === 'clear') {
      previousKey = '';
      display.textContent = '0';
    }
     if (action === 'calculate') {
       if (display.textContent === firstNum && display.textContent !== a) {
         display.textContent = calculate(previousNum, previousKey, firstNum)
       } else if (display.textContent !== firstNum) {
         a = display.textContent = calculate(parseFloat(display.textContent), previousKey, parseFloat(firstNum));
       }
     }
  
  }
});
