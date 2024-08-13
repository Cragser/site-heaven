import { useGetToPath, useGo, useTranslate } from "@refinedev/core";
import { Card, Divider, List, Space, Statistic, Typography } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";
import { resourcePath } from "@client/resources/refine-paths";

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
  parent: "person" | "company";
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

function createTitle(resource: string, translate: (key: string) => string) {
  return translate(`${resource}.${resource}`);
}

function useCreateData(
  resources: ResourceEnum[],
  id: string,
  parent: "person" | "company",
  record: unknown
) {
  const translate = useTranslate();
  const go = useGo();
  const getToPath = useGetToPath();
  const actions = (resource: ResourceEnum) => {
    return getToPath({
      action: "list",
      meta: {
        [`${parent}Id`]: id,
      },
      resource: resourcePath[resource],
    });
  };
  const handleClick = (resource: ResourceEnum) => {
    go({
      to: actions(resource),
    });
  };

  return resources.map((resource): CardProps => {
    const title = createTitle(resource, translate);
    const total = calculateTotal(record, resource);

    return {
      handleClick: () => handleClick(resource),
      key: resource,
      title,
      total,
    };
  });
}

function CardList({ id, parent, record, resources }: Readonly<CardListProps>) {
  const data: CardProps[] = useCreateData(resources, id, parent, record);
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
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Statistic title="Relacionados" value={item.total} />
              {/*<Link to={item.url}>Ver más</Link>*/}

              {/*<p>{item.key}</p>*/}
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}

export default CardList;
