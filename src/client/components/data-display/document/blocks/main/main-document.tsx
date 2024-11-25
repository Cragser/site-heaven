import { DocumentCreationType } from "@/lib/ui-control/document/types/documentCreationType";
import DocumentSection from "@/lib/surfaces/document-section";
import Chapter from "@components/data-display/document/blocks/chapter/chapter";
import { Divider, Space } from "antd";
import SaveDocumentButton from "@components/data-display/document/blocks/main/save-document-button";
import ReloadAllDataButton from "@components/data-display/document/blocks/main/reload-all-data-button";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store"; //

//
function createRandomId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export default function MainDocument({
  title,
}: Readonly<DocumentCreationType>) {
  const { chapters } = useDocumentContentStore();

  // const [cards, setCards] = useState(chapters);
  // const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
  //   setCards((prevCards: ChapterType[]) =>
  //     update(prevCards, {
  //       $splice: [
  //         [dragIndex, 1],
  //         [hoverIndex, 0, prevCards[dragIndex] as ChapterType],
  //       ],
  //     }),
  //   );
  // }, []);

  return (
    <DocumentSection>
      <h2>{title}</h2>
      <Space
        style={{
          marginBottom: "1rem",
          width: "100%",
          justifyContent: "end",
        }}
      >
        <SaveDocumentButton />
        <ReloadAllDataButton />
      </Space>
      <Space direction={"vertical"} split={<Divider />}>
        {/* <ChapterCollection cards={cards} /> */}
        {chapters.map((chapter) => (
          <Chapter
            key={chapter.order}
            {...chapter}
            // moveCard={moveCard}
            // id={index + "-" + chapter.title}
            // index={index}
          />
        ))}
      </Space>
    </DocumentSection>
  );
}
