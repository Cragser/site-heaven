import styles from "./section-control.module.css";
import { Typography } from "antd";

interface Props {
  title: string;
  text: string;
}

export default function SectionControl({ title, text }: Readonly<Props>) {
  return (
    <div className={styles.container}>
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Text type="secondary">{text}</Typography.Text>
    </div>
  );
}
