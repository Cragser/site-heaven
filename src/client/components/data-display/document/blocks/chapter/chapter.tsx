import React, { useEffect, useRef } from "react";
import { Button, Form } from "antd";
import {
  CheckOutlined,
  DeleteOutlined,
  DragOutlined,
  EditOutlined,
} from "@ant-design/icons";
import styles from "./chapter.module.css";
import { useEditSection } from "@components/data-display/document/blocks/chapter/use-edit-section";
import { useDrag, useDrop } from "react-dnd";
import { ChapterType } from "@/lib/ui-control/document/types/documentCreationType";
import type { Identifier, XYCoord } from "dnd-core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import richTextRender from "@client/util/ant/fields/rich-text-render";
import Subchapter from "@components/data-display/document/blocks/subchapter/subchapter";
import { Badge, Card, Space } from "antd";
import useDragAndDropChapter from "@components/data-display/document/blocks/chapter/use-drag-and-drop-chapter";
import SubchapterCollection from "@components/data-display/document/blocks/subchapter/subchapter-collection";

export const ItemTypes = {
  CARD: "card",
};

export interface CardProps {
  id: any;
  index: number;
  moveCard?: (dragIndex: number, hoverIndex: number) => void;
  isDraggable: boolean;
}

export default function Chapter({
  title,
  content,
  subchapters,
  moveCard,
  index,
  id,
  entity,
}: Readonly<ChapterType>) {
  const {
    isEditing,
    note,
    handleDelete,
    handleMove,
    handleEdit,
    handleAddNote,
    isDraggable,
    isSelected,
    handleSelect,
  } = useEditSection({
    entity,
  });

  const { ref, opacity, handlerId, drag } = useDragAndDropChapter({
    moveCard,
    index,
    id,
    isDraggable,
  });

  if (!moveCard || !index || !id) {
    console.log("No se puede mover el card");
    return null;
  }

  return (
    <Badge.Ribbon text={entity} color="cyan">
      <div
        ref={ref}
        style={{ opacity }}
        className={`${styles.container} ${isSelected ? styles.selected : ""}`}
        data-handler-id={handlerId}
      >
        <div className={styles.buttonContainer}>
          <Button icon={<DeleteOutlined />} onClick={handleDelete} />
          <Button
            icon={<DragOutlined />}
            onClick={handleMove}
            type={isDraggable ? "primary" : "default"}
            ref={drag}
          />
          <Button
            icon={<EditOutlined />}
            onClick={handleEdit}
            type={isEditing ? "primary" : "default"}
          />
          <Button
            icon={<CheckOutlined />}
            onClick={handleSelect}
            type={isSelected ? "primary" : "default"}
          />
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          {/* <p>{content}</p> */}
          {richTextRender(content)}
          <SubchapterCollection subchapters={subchapters} />
          {note && (
            <p>
              <strong>Nota:</strong> {note}
            </p>
          )}
          {isEditing && (
            <Form.Item
              name={"hola"}
              getValueFromEvent={(content, delta, source, editor) => {
                return content;
              }}
              getValueProps={(value) => ({
                value: value || "",
              })}
            >
              <ReactQuill theme="snow" />
            </Form.Item>
          )}
        </div>
      </div>
    </Badge.Ribbon>
  );
}
