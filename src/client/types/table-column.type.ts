// TODO: Change to ItemConfig
// DOC: Un item será un elemento de un config
// Un config debería ser una colección.

export interface TableColumn {
  key?: string;
  dataIndex: string[];
  render?: any;
  enum?: any;
}
