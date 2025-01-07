type Operation = "add" | "subtract" | "multiply" | "divide";

// Is this needed?
// interface CalculateOptions {
//   fn?: (context?: any) => any;
//   inverse?: (context?: any) => any;
// }

export const calculate = function (
  operation: Operation,
  input1: any,
  input2: any,
  // options?: CalculateOptions,
): number | string {
  // Convert inputs to numbers
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  // Handle invalid inputs
  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid inputs";
  }

  // Perform the specified operation
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Division by zero";
    default:
      throw new Error(`Invalid operation: ${operation}`);
  }
};
