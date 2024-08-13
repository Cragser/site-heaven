import { Descriptions } from "antd";
import { useTranslate } from "@refinedev/core";
import FieldSelector, {
  FieldTypeEnum,
} from "@client/util/ant/fields/field-selector";
import { isValidValue } from "@components/data-display/description/helper";

interface ExceptionRenderProps {
  key: string;
  field: string;
}

export interface DescriptionCustomProps {
  record?: Record<string, unknown>;
  exceptions?: ExceptionRenderProps[];
  fieldTypeRecord?: Record<string, FieldTypeEnum>;
  entity: string;
}

export default function DescriptionCustom({
  entity,
  exceptions,
  fieldTypeRecord = {},
  record,
}: Readonly<DescriptionCustomProps>) {
  const translate = useTranslate();

  if (!record) {
    return null;
  }

  const items = [];
  for (const key in record) {
    if (!(key in record)) {
      throw new Error(`The key ${key} does not exist in the record object`);
    }
    const keyTranslate = `${entity}.fields.${key}`;
    const value = record[key];
    if (isValidValue(value) && key !== "id") {
      items.push({
        children: (
          <FieldSelector fieldType={fieldTypeRecord[key]} value={value} />
        ),
        key,
        label: translate(keyTranslate),
      });
    }
  }

  for (const exception of exceptions || []) {
    const key = exception.key;
    const keyTranslate = `${entity}.fields.${key}`;
    // @ts-expect-error Seguramente funcionará :V
    const value = record[key][exception.field];

    items.push({
      children: (
        <FieldSelector
          fieldType={fieldTypeRecord[exception.key]}
          value={value}
        />
      ),
      key,
      label: translate(keyTranslate),
    });
  }

  const tranlationKey = `${entity}.titles.table`;

  return (
    <Descriptions
      column={{
        lg: 2,
        md: 2,
        sm: 1,
        xl: 2,
        xs: 1,
        xxl: 2,
      }}
      bordered
      title={translate(tranlationKey)}
      items={items}
    />
  );
}
