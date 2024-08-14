import { Form, Input } from "antd";

interface Props {
  meta: Record<string, string>;
}

export default function createHiddenFields({ meta }: Props) {
  return Object.entries(meta).map(([key, value]) => (
    <Form.Item key={key} name={key} initialValue={value} hidden={true}>
      <Input />
    </Form.Item>
  ));
}
