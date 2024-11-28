import richTextRender from "@client/util/ant/fields/rich-text-render";
import React, { useState } from "react";
import styles from "./subchapter.module.css";
import { Button, Drawer, List, Space, Typography } from "antd";
import { SubchapterData } from "@components/data-display/types/chapter.type";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import ReactQuill from "react-quill";
import { If } from "react-if";

export default function Subchapter({
  title,
  contentRepeatingSection,
  chapterIndex,
  order,
  note,
}: Readonly<SubchapterData>) {
  const {
    updateNoteSubchapter,
    deleteSubchapter,
    moveUpSubchapter,
    moveDownSubchapter,
  } = useDocumentContentStore();
  // edit button here
  const [open, setOpen] = useState(false);

  const [showEditor, setShowEditor] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  if (typeof chapterIndex === "undefined") return null;

  const handleNoteChange = (value: string) => {
    updateNoteSubchapter(chapterIndex, order, value); // Actualizamos el estado con el valor del editor
  };

  return (
    <List.Item
      actions={[
        <If condition={order !== 0}>
          <a
            key="list-loadmore-edit"
            onClick={() => moveUpSubchapter(chapterIndex, order)}
          >
            Mover arriba
          </a>
        </If>,
        <a
          key="list-loadmore-edit"
          onClick={() => moveDownSubchapter(chapterIndex, order)}
        >
          Mover abajo
        </a>,

        <a key="list-loadmore-edit" onClick={showDrawer}>
          Modificar
        </a>,
      ]}
      key={title}
      className={styles.container}
    >
      <Typography.Paragraph>{title}</Typography.Paragraph>
      <Drawer size={"large"} title={title} onClose={onClose} open={open}>
        <Space>
          <Button onClick={() => deleteSubchapter(chapterIndex, order)}>
            Eliminar
          </Button>
          <Button onClick={() => setShowEditor(!showEditor)}>
            {showEditor ? "Ocultar" : "Mostrar"} editor
          </Button>
        </Space>
        {richTextRender(contentRepeatingSection)}
        <Typography.Title level={5}>Nota</Typography.Title>
        <If condition={showEditor}>
          <ReactQuill
            theme="snow"
            value={note} // Controlamos el valor del editor
            onChange={handleNoteChange} // Actualizamos el estado con el cambio
          />
        </If>
      </Drawer>
    </List.Item>
  );
}
