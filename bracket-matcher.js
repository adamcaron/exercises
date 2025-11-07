// Create a method/function that will intake a set of brackets [ { ( as a string 
// and determine if the brackets are well-formed (match). Brackets can be nested.

// Test Cases:

  // bracket('{}')
  // // => true

  // bracket('{()}')
  // // => true

  // bracket('({[]}{[]})') 
  // // => true
    
  // bracket('{(')
  // // => false
    
  // bracket('{[)][]}')
  // // => false
    
  // bracket(']')
  // // => false
    
const bracket = function (brackets = '') {
  console.log('\ntest: ', brackets)
  
  const openBrackets = {
    a: '{',
    b: '[',
    c: '(',
  }
  const closeBrackets = {
    a: '}',
    b: ']',
    c: ')',
  }
  
  const isOpenBracket = function (char) { 
    return Object.values(openBrackets).includes(char)
  }
  
  const isCloseBracket = function (char) { 
    return Object.values(closeBrackets).includes(char)
  }

  if (!isOpenBracket(brackets[0])) {
    console.log('Result: ', false)
    console.log('Reason: It doens\'t start with an open bracket, so it\'s not well-formed')
    return
  }

  if (!isCloseBracket(brackets[brackets.length - 1])) {
    console.log('Result: ', false)
    console.log('Reason: The last character is not a closing bracket, not well-formed')
    return
  }
  
  const stack = []
  const results = brackets.split('').map((char, i) => {
      
    if (isOpenBracket(char)) {
      // it's an open bracket, set the key aside.
      stack.push(Object.keys(openBrackets).find((key) => openBrackets[key] === char))
      return true
    } else if (isCloseBracket(char) && closeBrackets[stack[stack.length - 1]] === char) {
      // it's a closing bracket and it matches the most recent open bracket
      // remove the pending open bracket, it's still well-formed
      stack.pop()
      return true
    } 
    
    return false
  })

  // It's not well-formed
  if (results.includes(false)) {
    console.log('result: ', false)
    return
  }

  // It's well-formed
  console.log('result: ', true)
  return 
}

bracket('{}')
bracket('{()}')
bracket('({[]}{[]})') 
bracket('{(')
bracket('{[)][]}')
bracket(']')
