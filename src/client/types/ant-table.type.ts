import { TableProps } from 'antd/es/table/InternalTable';
import { ResourceEnum } from '@lib/enums/resource.enum';

export interface AntTableType {
  tableProps: TableProps;
  parent?: string;
  parentResource?: ResourceEnum;
}
