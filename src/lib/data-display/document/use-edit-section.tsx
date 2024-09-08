import { useState } from "react";

export const useEditSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [note, setNote] = useState("");

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
    console.log("Editing section");
    // Implementar lógica de edición
  };

  const handleAddNote = (newNote) => {
    setNote(newNote);
  };

  return {
    isEditing,
    note,
    handleDelete,
    handleMove,
    handleEdit,
    handleAddNote,
    isDraggable,
  };
};
