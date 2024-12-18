type CompareOperator =
  | "=="
  | "==="
  | "!="
  | "!=="
  | "<"
  | ">"
  | "<="
  | ">="
  | "typeof"
  | "&gt;"
  | "&lt;";

export function compare(a: any, operator: CompareOperator, b: any): any {
  if (arguments.length < 4) {
    throw new Error("handlebars Helper {{compare}} expects 4 arguments");
  }

  let result: boolean;
  switch (operator) {
    case "==":
      result = a == b;
      break;
    case "===":
      result = a === b;
      break;
    case "!=":
      result = a != b;
      break;
    case "!==":
      result = a !== b;
      break;
    case "<":
    case "&lt;":
      result = a < b;
      break;
    case ">":
    case "&gt;":
      result = a > b;
      break;
    case "<=":
      result = a <= b;
      break;
    case ">=":
      result = a >= b;
      break;
    case "typeof":
      result = typeof a === b;
      break;
    default:
      throw new Error(`helper {{compare}}: invalid operator: '${operator}'`);
  }
  return result;
}
