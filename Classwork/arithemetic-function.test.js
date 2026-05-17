//const {add,subtract} = require('./arithemetic-function');

//import.meta.jest.useFakeTimers();


import {add,subtract} from './arithemetic-function.js'

test("test addition of two positive numbers",() => {

    let firstNumber = 80;

    let secondNumber = 20;

    expect(add(firstNumber,secondNumber)).toBe(100);

})

test("test that addition of a positive and negative number works accurately",() => {

    
    let firstNumber = 80;

    let secondNumber = -20;

    expect(add(firstNumber,secondNumber)).toBe(60);

})

test("test that addition of two negative numbers gives a negative result",() => {
    
    let firstNumber = -80;

    let secondNumber = -20;

    expect(add(firstNumber,secondNumber)).toBe(-100);

})

test("test that subtraction of two numbers works accurately",() => {
    
    let firstNumber = 80;

    let secondNumber = 20;

    expect(subtract(firstNumber,secondNumber)).toBe(60);

})

test("test that subtraction of two negative numbers gives a negative result",() => {
    
    let firstNumber = -80;

    let secondNumber = -20;

    expect(subtract(firstNumber,secondNumber)).toBe(-60);

})

