import { ChapterData } from "@components/data-display/types/chapter.type";
import styles from "./chapter.module.css";
import { Button, Space } from "antd";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import ReactQuill from "react-quill";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function Chapter({
  title,
  content,
  order,
  note,
}: Readonly<ChapterData>) {
  const [showEditor, setShowEditor] = useState(false);
  const { moveUp, moveDown, deleteChapter, updateNote } =
    useDocumentContentStore();

  const handleNoteChange = (value: string) => {
    updateNote(order, value); // Actualizamos el estado con el valor del editor
  };

  return (
    <Space className={styles.container} direction={"vertical"}>
      <h3>{title}</h3>
      {/* <div>{content}</div> */}
      <ReactQuill theme="bubble" value={content} readOnly={true} />
      <Space>
        <Button onClick={() => deleteChapter(order)}>Eliminar</Button>
        <Button onClick={() => moveUp(order)}>Mover arriba</Button>
        <Button onClick={() => moveDown(order)}>Mover abajo</Button>
        <Button onClick={() => setShowEditor(!showEditor)}>
          {showEditor ? "Ocultar" : "Mostrar"} editor
        </Button>
      </Space>
      {showEditor && (
        <ReactQuill
          theme="snow"
          value={note} // Controlamos el valor del editor
          onChange={handleNoteChange} // Actualizamos el estado con el cambio
        />
      )}
    </Space>
  );
}
