type LogicalOperator = "AND" | "OR";

interface LogicalOptions {
  fn?: (context?: any) => any;
  inverse?: (context?: any) => any;
}

export const logical = function (
  operator: LogicalOperator,
  ...args: (any | LogicalOptions)[]
): boolean {
  // Remove options object from the arguments
  const options = args.pop() as LogicalOptions | undefined;

  switch (operator) {
    case "AND":
      return args.every(Boolean); // All conditions must be true
    case "OR":
      return args.some(Boolean); // At least one condition must be true
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};
