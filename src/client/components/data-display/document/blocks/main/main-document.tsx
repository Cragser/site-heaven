import { useCallback, useState } from "react";
import {
  ChapterType,
  DocumentCreationType,
} from "@/lib/ui-control/document/types/documentCreationType";
import update from "immutability-helper";
import DocumentSection from "@/lib/surfaces/document-section";
import Chapter from "@components/data-display/document/blocks/chapter/chapter";

//
function createRandomId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export default function MainDocument({
  title,
  chapters,
}: Readonly<DocumentCreationType>) {
  const [cards, setCards] = useState(chapters);
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: ChapterType[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as ChapterType],
        ],
      }),
    );
  }, []);

  console.log({ cards });
  return (
    <DocumentSection>
      <h2>{title}</h2>
      <div>
        {/* <ChapterCollection cards={cards} /> */}
        {cards.map((chapter, index) => (
          <Chapter
            key={createRandomId()}
            {...chapter}
            moveCard={moveCard}
            // id={index + "-" + chapter.title}
            // index={index}
          />
        ))}
      </div>
    </DocumentSection>
  );
}
