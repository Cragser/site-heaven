import { SubchapterType } from "@/lib/ui-control/document/types/documentCreationType";
import richTextRender from "@client/util/ant/fields/rich-text-render";
import React from "react";
import styles from "./subchapter.module.css";
import { List } from "antd";

export default function Subchapter({
  title,
  content,
}: Readonly<SubchapterType>) {
  // edit button here
  return (
    <List.Item
      actions={[
        <a key="list-loadmore-edit">edit</a>,
        <a key="list-loadmore-more">more</a>,
      ]}
      key={title}
      className={styles.container}
    >
      {richTextRender(content)}
    </List.Item>
  );
}
