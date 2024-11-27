import { SubchapterType } from "@/lib/ui-control/document/types/documentCreationType";
import Subchapter from "@components/data-display/document/blocks/subchapter/subchapter";
import styles from "./subchapter-collection.module.css";
import { List } from "antd";
interface Props {
  subchapters?: SubchapterType[];
}

export default function SubchapterCollection({ subchapters }: Readonly<Props>) {
  if (!subchapters || subchapters.length === 0) return null;
  return (
    <List className={styles.container}>
      {subchapters.map((subchapter) => (
        <Subchapter key={subchapter.title} {...subchapter} />
      ))}
    </List>
  );
}
