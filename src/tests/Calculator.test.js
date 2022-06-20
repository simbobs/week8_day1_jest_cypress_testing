import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let runningTotal;
  let equalsButton;

  beforeEach(() => {
    container = render(<Calculator/>)
    runningTotal = container.getByTestId('running-total');
    equalsButton = container.getByTestId('operator-equals');
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add numbers', () => {
    const button1 =container.getByTestId('number1');
    const button2 = container.getByTestId('number4');
    const addButton = container.getByTestId('operator_add');


    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('5');

    
});

it('should subtract number 4 from 7', () => {
  const button7 = container.getByTestId('number7');
  const button4 = container.getByTestId('number4');
  const subtractButton = container.getByTestId('operator-subtract');

  fireEvent.click(button7);
  fireEvent.click(subtractButton);
  fireEvent.click(button4);
  fireEvent.click(equalsButton);

  expect(runningTotal.textContent).toEqual('3');

  
});

it('should multiply numbers', () => {

  const button5 = container.getByTestId('number5');
  const button3 = container.getByTestId('number3');
  const multiplyButton = container.getByTestId('operator-multiply');

  fireEvent.click(button5);
  fireEvent.click(multiplyButton);
  fireEvent.click(button3);
  fireEvent.click(equalsButton);

  expect(runningTotal.textContent).toEqual('15');

  
});

it('should divide numbers', () => {
  
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const button7 = container.getByTestId('number7');
  const divideButton = container.getByTestId('operator-divide');

  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(divideButton);
  fireEvent.click(button7);
  fireEvent.click(equalsButton);

  expect(runningTotal.textContent).toEqual('3');

});

it('should concatenate numbers clicked', () => {
  
  const button2 = container.getByTestId('number2');
  const button3 = container.getByTestId('number3');
  const button7 = container.getByTestId('number7');

  fireEvent.click(button2);
  fireEvent.click(button7);
  fireEvent.click(button3);

  expect(runningTotal.textContent).toEqual('273');
  
  

});

it('should chain multiple operations together', () => {
  
  const button2 = container.getByTestId('number2');
  const button3 = container.getByTestId('number3');
  const divideButton = container.getByTestId('operator-divide');
  const multiplyButton = container.getByTestId('operator-multiply');
 
  
  

  fireEvent.click(button2);
  fireEvent.click(multiplyButton);
  fireEvent.click(button3);
  fireEvent.click(divideButton);
  fireEvent.click(button2);
  fireEvent.click(equalsButton);

  expect(runningTotal.textContent).toEqual('3');
  



});

it('should clear the running total', () => {

  const button2 = container.getByTestId('number2');
  const button3 = container.getByTestId('number3');
  const divideButton = container.getByTestId('operator-divide');
  const multiplyButton = container.getByTestId('operator-multiply');
  const clearButton = container.getByTestId('clear');
 
  
  

  fireEvent.click(button2);
  fireEvent.click(multiplyButton);
  fireEvent.click(button3);
  fireEvent.click(divideButton);
  fireEvent.click(button2);
  fireEvent.click(equalsButton);

  fireEvent.click(clearButton);

  expect(runningTotal.textContent).toEqual('0');

  
  


})





})

