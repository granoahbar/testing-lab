const {returnTwo, greeting, add} = require('./function.js')

////////////////////////////////////////////////////////////////////

test('Test should return 2', () => {
    expect(returnTwo()).toBe(2)
})


test('greeting should return "Hello, name." where name is the value of the name parameter.', () => {
  expect(greeting('James')).toBe("Hello, James.")
  expect(greeting('Jill')).toBe("Hello, Jill.")
  
})


test('Test should return the sum of num1 and num2', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})

