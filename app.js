// create a function that takes in three params: two numbers
// and a string representing the operation
// in the function, operations are performed based on the string

// algo for operation
// if string matches add
   // return num1 + num2
// if string matches multiply
   // return num1 * num2 
// if string matches subtract
   // return num1 - num2
// if string matches divide
   // return num1 / num2

// algo for validation
// if num1 and num2 does not match empty or undefined values 
// and the operator is a string and if num2 does not match zero 
// then perform the operation 

function calculate(num1, num2, operation) {
  // validation
  if (num1 === undefined || num1 === "" || num2 === undefined || num2 === "") {
    return "error: input cannot be empty.";
  }

  if (typeof operation!== "string") {
    return "error: operation must be a string.";
  }

  if (num2 === 0 && (operation === "divide" || operation === "/")) {
    return "error: division by zero is not allowed.";
  }

  // operation logic
  switch (operation) {
    case "add":
      return num1 + num2;
    case "multiply":
      return num1 * num2;
    case "subtract":
      return num1 - num2;
    case "divide":
    case "/":
      return num1 / num2;
    default:
      return "error: invalid operation.";
  }
}

console.log(calculate(5, 2, "multiply"));

