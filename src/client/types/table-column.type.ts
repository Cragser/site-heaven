// TODO: Change to ItemConfig
// DOC: Un item será un elemento de un config
// Un config debería ser una colección.

export interface ItemConfig {
  key: string;
  dataIndex: string[];
  render?: any;
  enum?: any;
  type?: // | "button"
  // | "checkbox"
  // | "color"
  | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    // | "image"
    // | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    // | "reset"
    // | "search"
    // | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "textarea";

  // | "week";
}
