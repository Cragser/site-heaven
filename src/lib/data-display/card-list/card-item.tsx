import { Card, List, Statistic } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { CardProps } from "@/lib/@types/data-display/card-props";

export default function CardItem({
  title,
  key,
  total,
  handleClick,
}: Readonly<CardProps>) {
  return (
    <List.Item>
      <Card
        title={
          <div
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {title}
          </div>
        }
        actions={[
          <UnorderedListOutlined key="setting" onClick={handleClick} />,
          // <EditOutlined key="edit" />,
          // <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Statistic title="Relacionados" value={total} />
      </Card>
    </List.Item>
  );
}
