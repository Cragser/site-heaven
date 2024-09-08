import Chapter from "@/lib/data-display/document/chapter";
import {
  ChapterType,
  DocumentType,
} from "@/lib/ui-control/document/types/document.type";
import DocumentSection from "@/lib/surfaces/document-section";
import { useCallback, useState } from "react";
import update from "immutability-helper";

export default function MainDocumentControl({ title, chapters }: DocumentType) {
  const [cards, setCards] = useState(chapters);
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    console.log("Moving section|| Callback");
    setCards((prevCards: ChapterType[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as ChapterType],
        ],
      })
    );
  }, []);

  return (
    <DocumentSection>
      <h2>{title}</h2>
      <div>
        {cards.map((chapter, index) => (
          <Chapter
            key={index}
            {...chapter}
            moveCard={moveCard}
            id={index + "-" + chapter.title}
            index={index}
          />
        ))}
      </div>
    </DocumentSection>
  );
}
