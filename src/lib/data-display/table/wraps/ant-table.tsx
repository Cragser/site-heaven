import { Table } from "antd";
import React from "react";
import { TableProps } from "antd/es/table/InternalTable";

interface Props {
  children: React.ReactNode;
  // node_modules/.pnpm/antd@5.21.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/InternalTable.d.ts
  /**
   * export interface TableProps<RecordType = AnyObject> extends Omit<RcTableProps<RecordType>, 'transformColumns' | 'internalHooks' | 'internalRefs' | 'data' | 'columns' | 'scroll' | 'emptyText'> {
   *     dropdownPrefixCls?: string;
   *     dataSource?: RcTableProps<RecordType>['data'];
   *     columns?: ColumnsType<RecordType>;
   *     pagination?: false | TablePaginationConfig;
   *     loading?: boolean | SpinProps;
   *     size?: SizeType;
   *     bordered?: boolean;
   *     locale?: TableLocale;
   *     rootClassName?: string;
   *     onChange?: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<RecordType> | SorterResult<RecordType>[], extra: TableCurrentDataSource<RecordType>) => void;
   *     rowSelection?: TableRowSelection<RecordType>;
   *     getPopupContainer?: GetPopupContainer;
   *     scroll?: RcTableProps<RecordType>['scroll'] & {
   *         scrollToFirstRowOnChange?: boolean;
   *     };
   *     sortDirections?: SortOrder[];
   *     showSorterTooltip?: boolean | SorterTooltipProps;
   *     virtual?: boolean;
   * }
   */
  tableProps: TableProps;
}

export default function AntTable({ tableProps, children }: Readonly<Props>) {
  return (
    <Table
      {...tableProps}
      rowKey="id"
      pagination={{
        ...tableProps.pagination,
        position: ["bottomCenter"],
        size: "small",
      }}
    >
      {children}
    </Table>
  );
}
