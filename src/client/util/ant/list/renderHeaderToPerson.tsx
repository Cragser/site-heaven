import { Button, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useGetToPath, useGo, useResource } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { resourcePath } from "@client/resources/refine-paths";
import { SectionEntityType } from "@page/types/section-entity.type";

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

interface CustomHeaderProps {
  customButtons: any;
  defaultButtons: any;
  id: string;
  parent: SectionEntityType;
}

const CustomHeader = ({
  customButtons,
  defaultButtons,
  id,
  parent,
}: CustomHeaderProps) => {
  const getToPath = useGetToPath();
  const go = useGo();
  const selectedResource =
    parent === "person" ? ResourceEnum.person : ResourceEnum.company;
  const url: string = getToPath({
    action: "show",
    meta: { id: id },
    resource: resourcePath[selectedResource],
  }) as string;

  const handleClick = () => {
    go({ to: url });
  };

  const label = parent === "person" ? "persona" : "empresa";
  return (
    <Space>
      <Button type={"link"} onClick={handleClick}>
        <ArrowLeftOutlined
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        Vista {label}
      </Button>
      {customButtons}

      {defaultButtons}
    </Space>
  );
};

interface CustomHeaderProps {
  customButtons: any;
  id: string;
  parent: SectionEntityType;
}

export const renderHeaderToEntity = ({
  id,
  customButtons,
  parent,
}: Omit<CustomHeaderProps, "defaultButtons">) => {
  return ({ defaultButtons }: any) => (
    <CustomHeader
      defaultButtons={defaultButtons}
      id={id}
      customButtons={customButtons}
      parent={parent}
    />
  );
};

export const renderHeaderWithoutDefault = ({
  id,
  customButtons,
  parent,
}: Omit<CustomHeaderProps, "defaultButtons">) => {
  return ({ defaultButtons }: any) => (
    <CustomHeader
      defaultButtons={null}
      id={id}
      customButtons={customButtons}
      parent={parent}
    />
  );
};
