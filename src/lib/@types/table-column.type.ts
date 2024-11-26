// TODO: Change to ItemConfig
// DOC: Un item será un elemento de un config
// Un config debería ser una colección.

import { ReactNode } from "react";
import { ResourceEnum } from "@lib/enums/resource.enum";

type ItemConfigType =
  // | "button"
  // | "checkbox"
  // | "color"
  | "custom"
  | "boolean"
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
  | "textarea"
  | "rich-text";

// TODO: Considera migrar los elementos de tipo fields y tipo column.
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
  // custom
  // Field is for Forms
  field?: {
    custom?: (
      column: ItemConfig,
      resource: ResourceEnum,
      formProps?: unknown,
    ) => ReactNode;
    shouldRender?: (values?: Record<string, any>) => boolean;
  };
  // column is for Tables

  // row is for view
  rowConfig?: {
    span?: number;
  };
}
