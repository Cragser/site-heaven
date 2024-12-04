import { Navigation } from "@components/data-display/entity-collection/types/navigation.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { CrudFilters } from "@refinedev/core";
import { SectionEntityType } from "@page/types/section-entity.type";

export interface NavigationCrud {
  create?: Navigation;
  show?: Navigation;
  edit?: Navigation;
  delete?: Navigation;
}

export interface CreateListProps {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  defaultNavigation?: boolean;
  initialFilter?: CrudFilters;
  navigation?: NavigationCrud;
}

export interface CreateRelationPageProps {
  parentId: string;
  // career
  entityResource: ResourceEnum;
  // personCareer
  relationResource: ResourceEnum;
  // person
  parentResource: ResourceEnum;
  parent: SectionEntityType;
  columns: ItemConfig[];
  navigation?: NavigationCrud;
  showDrawer?: boolean;
}

export interface ListRelationComplexPageProps {
  parentId: string;
  entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  parentResource: ResourceEnum;
  columns: ItemConfig[];
  navigation?: NavigationCrud;
}
