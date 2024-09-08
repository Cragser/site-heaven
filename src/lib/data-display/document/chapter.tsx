import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import { DeleteOutlined, DragOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./chapter.module.css";
import { useEditSection } from "@/lib/data-display/document/use-edit-section";
import { useDrag, useDrop } from "react-dnd";
import { ChapterType } from "@/lib/ui-control/document/types/document.type";
import type { Identifier, XYCoord } from "dnd-core";

interface DragItem {
  index: number;
  id: string;
  type: string;
}
export const ItemTypes = {
  CARD: "card",
};

export interface CardProps {
  id: any;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  isDraggable: boolean;
}

const useDragAndDrop = ({ id, index, moveCard, isDraggable }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      console.log("Hovering", dragIndex, hoverIndex, item);

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => isDraggable,
  });

  const opacity = isDragging ? 0.55 : 1;
  // drag(drop(ref));
  useEffect(() => {
    preview(drop(ref));
  }, [preview, drop]);
  return { ref, opacity, handlerId, drag };
};

export default function Chapter({
  title,
  content,
  subchapters,
  moveCard,
  index,
  id,
}: Readonly<ChapterType>) {
  if (!moveCard || !index || !id) {
    return null;
  }

  const {
    isEditing,
    note,
    handleDelete,
    handleMove,
    handleEdit,
    handleAddNote,
    isDraggable,
  } = useEditSection();

  const { ref, opacity, handlerId, drag } = useDragAndDrop({
    moveCard,
    index,
    id,
    isDraggable,
  });

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className={styles.container}
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
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
        <ul>
          {subchapters &&
            subchapters.map((subchapter) => (
              <li key={subchapter.title}>
                <h3>{subchapter.title}</h3>
                <p>{subchapter.content}</p>
              </li>
            ))}
        </ul>

        {note && (
          <p>
            <strong>Nota:</strong> {note}
          </p>
        )}
        {isEditing && (
          <div>
            <input
              type="text"
              placeholder="Añadir nota"
              onChange={(e) => handleAddNote(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
