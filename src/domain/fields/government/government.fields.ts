import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

//
// @Column({ default: null, nullable: true })
// position: string;
// // nivel: enum federal, estatal, municial
// @Column({ default: null, nullable: true })
// level: string;
// // periodo inicio
// @Column({ default: null, nullable: true })
// startDate: Date;
// // periodo fin
// @Column({ default: null, nullable: true })
// endDate: Date;
export const governmentFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("description"),
  },
  {
    ...createItemConfig("position"),
  },
  {
    ...createItemConfig("level"),
  },
  {
    ...createItemConfig("startDate"),
  },
  {
    ...createItemConfig("endDate"),
  },
];
