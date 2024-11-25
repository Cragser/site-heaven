import { Button } from "antd";

export default function ReloadAllDataButton() {
  const onClick = () => {
    console.log("Reload All Data");
  };
  return <Button onClick={onClick}>Reload All Data</Button>;
}
