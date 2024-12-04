import { ChapterData } from "@components/data-display/types/chapter.type";
import styles from "./chapter.module.css";
import { Collapse, Dropdown, List, Menu, Space, Typography } from "antd";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import ReactQuill from "react-quill";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import Subchapter from "@components/data-display/document/blocks/subchapter/subchapter";
import { If, When } from "react-if";
import { createChapters } from "@components/data-display/document/util/create-chapters";
import { SettingOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export default function Chapter({
  title,
  content,
  order,
  note,
  subchapters,
  id,
}: Readonly<ChapterData>) {
  const [showEditor, setShowEditor] = useState(false);
  const {
    dataToReplace,
    templateContent,
    updateNote,
    updateChapter,
    deleteChapter,
    moveUp,
    moveDown,
  } = useDocumentContentStore();

  const handleNoteChange = (value: string) => {
    updateNote(order, value);
  };

  const handleChapterChange = () => {
    const chapters = createChapters(dataToReplace, templateContent);
    const chapter = chapters.find((chapter) => chapter.id === id);
    if (chapter !== undefined) {
      updateChapter(order, chapter);
    }
  };

  const handleShowEditor = () => {
    setShowEditor(!showEditor);
  };

  const showEditorLabel = showEditor ? "Ocultar" : "Mostrar";

  const dropdownMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Eliminar",
          onClick: (event) => {
            event.domEvent.preventDefault();
            event.domEvent.stopPropagation();
            deleteChapter(order);
          },
        },
        {
          key: "2",
          label: "Mover arriba",
          onClick: (event) => {
            event.domEvent.preventDefault();
            event.domEvent.stopPropagation();
            moveUp(order);
          },
        },
        {
          key: "3",
          label: "Mover abajo",
          onClick: (event) => {
            event.domEvent.preventDefault();
            event.domEvent.stopPropagation();
            moveDown(order);
          },
        },
        {
          key: "4",
          label: "Actualizar",
          onClick: (event) => {
            event.domEvent.preventDefault();
            event.domEvent.stopPropagation();
            handleChapterChange();
          },
        },
        {
          key: "5",
          label: `${showEditorLabel} editor`,
          onClick: (event) => {
            event.domEvent.preventDefault();
            event.domEvent.stopPropagation();
            handleShowEditor();
          },
        },
      ]}
    />
  );

  return (
    <Collapse className={styles.container} expandIconPosition="left">
      <Collapse.Panel
        header={<Typography.Title level={5}>{title}</Typography.Title>}
        key={id}
        extra={
          <Dropdown overlay={dropdownMenu} trigger={["click"]}>
            <SettingOutlined
              onClick={(event) => {
                event.stopPropagation(); // Para evitar que el dropdown cierre el panel
              }}
            />
          </Dropdown>
        }
      >
        <Space direction={"vertical"}>
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
          <If condition={!showEditor}>
            <ReactQuill
              className={styles.content}
              theme="bubble"
              modules={{
                toolbar: false,
              }}
              value={note}
              readOnly={true}
            />
          </If>

          <When
            condition={Array.isArray(subchapters) && subchapters.length > 0}
          >
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
      </Collapse.Panel>
    </Collapse>
  );
}
