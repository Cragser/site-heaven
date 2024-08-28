import { Button, Flex } from "antd";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  companyId: string;
}

export function Stakeholder({ companyId }: Props) {
  const handleClick = useGoTo();

  const handleGo = () => {
    handleClick({
      action: "list",
      meta: {
        companyId: companyId,
      },
      resource: ResourceEnum.companyPerson,
    });
  };
  return (
    <div>
      <h3>Stakeholders</h3>
      <Flex justify={"start"} align={"center"}>
        <Button onClick={handleGo}>Ver</Button>
      </Flex>
    </div>
  );
}
