import { Button } from "antd";

export default function SaveDocumentButton() {
  const onClick = () => {
    console.log("Save");
  };
  return <Button onClick={onClick}>Save</Button>;
}
