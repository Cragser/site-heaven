import richTextRender from "@client/util/ant/fields/rich-text-render";
import React, { useState } from "react";
import styles from "./subchapter.module.css";
import { Button, Drawer, List, Space, Typography } from "antd";
import { SubchapterData } from "@components/data-display/types/chapter.type";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import ReactQuill from "react-quill";

export default function Subchapter({
  title,
  contentRepeatingSection,
  chapterIndex,
  order,
  note,
}: Readonly<SubchapterData>) {
  const { updateNoteSubchapter, deleteSubchapter } = useDocumentContentStore();
  // edit button here
  const [open, setOpen] = useState(false);

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
        <a key="list-loadmore-edit" onClick={showDrawer}>
          Modificar
        </a>,
      ]}
      key={title}
      className={styles.container}
    >
      <Typography.Paragraph>{title}</Typography.Paragraph>
      <div>{chapterIndex}</div>
      <Drawer size={"large"} title={title} onClose={onClose} open={open}>
        <Space>
          <Button onClick={() => deleteSubchapter(chapterIndex, order)}>
            Eliminar
          </Button>
          {/* <Button onClick={() => deleteChapter(order)}>Eliminar</Button> */}
          {/* <Button onClick={() => moveUp(order)}>Mover arriba</Button> */}
          {/* <Button onClick={() => moveDown(order)}>Mover abajo</Button> */}
          {/* <Button onClick={() => setShowEditor(!showEditor)}> */}
          {/*   /!* {showEditor ? "Ocultar" : "Mostrar"} editor *!/ */}
          {/* </Button> */}
        </Space>
        {richTextRender(contentRepeatingSection)}
        <Typography.Title level={5}>Nota</Typography.Title>
        <ReactQuill
          theme="snow"
          value={note} // Controlamos el valor del editor
          onChange={handleNoteChange} // Actualizamos el estado con el cambio
        />
      </Drawer>
    </List.Item>
  );
}
