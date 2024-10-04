import { Button, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useGetToPath, useGo } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { SectionEntityType } from "@page/types/section-entity.type";
import { resourceNavigation } from "@client/navigation/resource-navigation";
import { ReactNode } from "react";

const Header = ({ customButtons, defaultButtons, personId, resourse }: any) => {
  // TODO: useResource as an object returns url with personId instead of id

  const getToPath = useGetToPath();
  const go = useGo();
  const url: string = getToPath({
    action: "show",
    meta: { id: personId },
    resource: resourceNavigation[ResourceEnum.person],
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
  customButtons?: any[],
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
  const mapSelectedResource = {
    person: ResourceEnum.person,
    company: ResourceEnum.company,
    government: ResourceEnum.government,
    documentTemplate: ResourceEnum.documentTemplate,
    document: ResourceEnum.document,
  };
  const selectedResource = mapSelectedResource[parent];
  if (!selectedResource) {
    throw new Error(`Resource ${parent} not found`);
  }

  const url: string = getToPath({
    action: "show",
    meta: { id: id },
    resource: resourceNavigation[selectedResource],
  }) as string;

  const handleClick = () => {
    go({ to: url });
  };

  const mapLabel = {
    person: "persona",
    company: "empresa",
    government: "gobierno",
    documentTemplate: "plantilla",
    document: "documento",
  };

  const label = mapLabel[parent];
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
  return () => (
    <CustomHeader
      defaultButtons={null}
      id={id}
      customButtons={customButtons}
      parent={parent}
    />
  );
};

export const renderHeader = ({
  customButtons,
}: {
  customButtons: ReactNode[];
}) => {
  return () => <Space>{customButtons}</Space>;
};
