import { useState } from "react";
import useDocumentStore from "@components/data-display/document/state/useDocumentStore";
interface Props {
  entity: string;
}

export const useEditSection = ({ entity }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [note, setNote] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const { setChapterSelected, clearChapterSelected } = useDocumentStore();

  const handleDelete = () => {
    console.log("Deleting section");
    // Implementar lógica de eliminación
  };

  const handleMove = () => {
    console.log("Moving section");
    // Implementar lógica de movimiento
    setIsDraggable(!isDraggable);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    // Implementar lógica de edición
  };

  const handleAddNote = (newNote: string) => {
    setNote(newNote);
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
    setChapterSelected(entity);
    // entity
  };

  return {
    isEditing,
    note,
    handleDelete,
    handleMove,
    handleEdit,
    handleAddNote,
    isDraggable,
    isSelected,
    handleSelect,
  };
};
