import { Col, Divider, Row, Typography } from "antd";
import SectionControl from "@/lib/ui-control/document/section-control";
import LateralSection from "@/lib/surfaces/lateral-section";

export default function LateralDocumentControl({}) {
  return (
    <aside className="lateral-document-control">
      <LateralSection>
        <Typography.Title level={4}>Entidades</Typography.Title>
        <Divider orientation="left">Persona empresa</Divider>
        <Row gutter={8}>
          <Col className="gutter-row" span={12}>
            <SectionControl title="Person" text="Introducción" />
          </Col>
          <Col className="gutter-row" span={12}>
            <SectionControl title="Resumen ejectuvivo" text="Introducción" />
          </Col>
        </Row>
      </LateralSection>
    </aside>
  );
}
