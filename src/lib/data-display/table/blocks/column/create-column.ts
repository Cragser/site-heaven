// DOCUMENTATION COMPONENT

/**
 // General properties
 title?: ColumnTitle<RecordType>;
 responsive?: Breakpoint[];
 colSpan?: number;
 dataIndex?: DataIndex<RecordType>;
 render?: (value: any, record: RecordType, index: number) => React.ReactNode | RenderedCell<RecordType>;
 shouldCellUpdate?: (record: RecordType, prevRecord: RecordType) => boolean;
 rowSpan?: number;
 width?: number | string;
 minWidth?: number;
 onCell?: GetComponentProps<RecordType>;

 // Sorting properties
 sorter?: boolean | CompareFn<RecordType> | {
 compare?: CompareFn<RecordType>;
 multiple?: number;
 };
 sortOrder?: SortOrder;
 defaultSortOrder?: SortOrder;
 sortDirections?: SortOrder[];
 sortIcon?: (props: {
 sortOrder: SortOrder;
 }) => React.ReactNode;
 showSorterTooltip?: boolean | SorterTooltipProps;

 // Filtering properties
 filtered?: boolean;
 filters?: ColumnFilterItem[];
 filterDropdown?: React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode);
 filterOnClose?: boolean;
 filterMultiple?: boolean;
 filteredValue?: FilterValue | null;
 defaultFilteredValue?: FilterValue | null;
 filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
 filterMode?: 'menu' | 'tree';
 filterSearch?: FilterSearchType<ColumnFilterItem>;
 onFilter?: (value: React.Key | boolean, record: RecordType) => boolean;
 filterDropdownOpen?: boolean;
 onFilterDropdownOpenChange?: (visible: boolean) => void;
 filterResetToDefaultFilteredValue?: boolean;
 **/

export function createColumn(column: any) {
  return {
    ...column,
    dataIndex: column.dataIndex,
  };
}
