import { ChapterData } from "@components/data-display/types/chapter.type";
import styles from "./chapter.module.css";
import { Button, List, Space, Typography } from "antd";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import ReactQuill from "react-quill";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import Subchapter from "@components/data-display/document/blocks/subchapter/subchapter";
import { If, When } from "react-if";

export default function Chapter({
  title,
  content,
  order,
  note,
  subchapters,
}: Readonly<ChapterData>) {
  const [showEditor, setShowEditor] = useState(false);
  const { moveUp, moveDown, deleteChapter, updateNote } =
    useDocumentContentStore();

  const handleNoteChange = (value: string) => {
    updateNote(order, value);
  };

  return (
    <Space className={styles.container} direction={"vertical"}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Space>
        <Button onClick={() => deleteChapter(order)}>Eliminar</Button>
        <Button onClick={() => moveUp(order)}>Mover arriba</Button>
        <Button onClick={() => moveDown(order)}>Mover abajo</Button>
        <Button onClick={() => setShowEditor(!showEditor)}>
          {showEditor ? "Ocultar" : "Mostrar"} editor
        </Button>
      </Space>
      <ReactQuill
        className={styles.content}
        theme="bubble"
        modules={{
          toolbar: false,
        }}
        value={content}
        readOnly={true}
      />
      <If condition={showEditor}>
        <ReactQuill
          theme="snow"
          value={note} // Controlamos el valor del editor
          onChange={handleNoteChange} // Actualizamos el estado con el cambio
        />
      </If>
      <When condition={Array.isArray(subchapters) && subchapters.length > 0}>
        {/* <Typography.Title level={5}>Subcapitulos</Typography.Title> */}
        <List>
          {subchapters.map((subchapter) => (
            <Subchapter
              key={subchapter.title}
              {...subchapter}
              chapterIndex={order}
            />
          ))}
        </List>
      </When>
    </Space>
  );
}
