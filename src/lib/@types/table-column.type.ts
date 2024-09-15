// TODO: Change to ItemConfig
// DOC: Un item será un elemento de un config
// Un config debería ser una colección.

type ItemConfigType =
  // | "button"
  // | "checkbox"
  // | "color"
  | "autocomplete"
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

export interface ItemConfig {
  key: string;
  dataIndex: string[];
  type?: ItemConfigType;
  translateKey?: string;
  render?: any;
  // Limitado
  enum?: any;
  // Ilimitado
  selectResource?: any;
  selectDataIndex?: string[];
}
