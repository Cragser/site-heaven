import { useTranslate } from "@refinedev/core";
import { Card, Divider, List, Space, Statistic, Typography } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";
import { SectionEntityType } from "@page/types/section-entity.type";
import { useGoTo } from "@client/hooks/navigation/use-go-to";

const { Title } = Typography;

interface CardProps {
  title: string;
  key: string;
  total: number;
  handleClick: () => void;
}

interface CardListProps {
  resources: ResourceEnum[];
  uniqueResources?: ResourceEnum[];
  id: string;
  parent: SectionEntityType;
  record: any;
}

function calculateTotal(record: any, key: string) {
  const camelCaseKey = camelCase(key);
  const recordRelation =
    record !== undefined && camelCaseKey in record
      ? record[camelCaseKey]
      : null;
  return Array.isArray(recordRelation) ? recordRelation?.length : 0;
}

function useCreateData(
  resources: ResourceEnum[],
  id: string,
  parent: SectionEntityType,
  record: unknown,
) {
  const translate = useTranslate();
  const goto = useGoTo();

  return resources.map((resource): CardProps => {
    const title = translate(`${resource}.${resource}`);
    const total = calculateTotal(record, resource);

    return {
      handleClick: () => {
        goto({
          action: "list",
          meta: {
            [`${parent}Id`]: id,
          },
          resource: resource,
        });
      },
      key: resource,
      title,
      total,
    };
  });
}

function CardList({ id, parent, record, resources }: Readonly<CardListProps>) {
  const data: CardProps[] = useCreateData(resources, id, parent, record);
  console.log({ record });
  return (
    <>
      <Divider />
      <Space direction="vertical">
        <Title level={3}>{"Información relacionada"}</Title>
      </Space>

      <List
        grid={{
          column: 3,
          gutter: 16,
          sm: 2,
          xl: 4,
          xs: 1,
          xxl: 6,
        }}
        dataSource={data}
        renderItem={(item: CardProps) => (
          <List.Item>
            <Card
              title={item.title}
              actions={[
                <UnorderedListOutlined
                  key="setting"
                  onClick={item.handleClick}
                />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Statistic title="Relacionados" value={item.total} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}

export default CardList;
