import { Button, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useGetToPath, useGo, useResource } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { resourcePath } from "@client/resources/refine-paths";

const Header = ({ customButtons, defaultButtons, personId, resourse }: any) => {
  // TODO: useResource as an object returns url with personId instead of id
  const { resource: resourceEntity } = useResource(resourse);

  const getToPath = useGetToPath();
  const go = useGo();
  const url: string = getToPath({
    action: "show",
    meta: { id: personId },
    resource: resourcePath[ResourceEnum.person],
  }) as string;

  const handleClick = () => {
    go({ to: url });
  };
  return (
    <Space>
      <Button type={"link"} onClick={handleClick}>
        <ArrowLeftOutlined
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        Vista persona
      </Button>
      {customButtons}

      {defaultButtons}
    </Space>
  );
};

export const renderHeaderToPerson = (
  personId: string,
  resourse: ResourceEnum,
  customButtons?: any[]
) => {
  // eslint-disable-next-line react/display-name
  return ({ defaultButtons }: any) => (
    <Header
      defaultButtons={defaultButtons}
      personId={personId}
      resourse={resourse}
      customButtons={customButtons}
    />
  );
};
