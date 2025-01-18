import { Form } from "antd";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";
import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import createHiddenFields from "@/lib/mutate/util/create-hidden-fields";
import { MutationPageType } from "@/lib/pages/types/mutation-page.type";
import useFormStore from "@/lib/states/use-form-store";
import { memo, useCallback, useEffect, useMemo } from "react";

export const EditFormPage = memo(function EditFormPage({
  columns,
  entityResource,
  id,
  meta,
  title,
  parentId,
}: Readonly<MutationPageType>) {
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: entityResource,
    action: "edit",
    id: id,
    redirect: false,
  });

  const setValues = useFormStore((state) => state.setValues);

  const memoizedHiddenFields = useMemo(() => {
    return meta ? createHiddenFields({ meta }) : null;
  }, [meta]);

  const handleValuesChange = useCallback(
    (_, allValues) => {
      setValues({
        ...allValues,
        parentId,
      });
    },
    [setValues, parentId],
  );

  useEffect(() => {
    setValues({
      ...formProps.initialValues,
      parentId,
    });
  }, [formProps.initialValues, parentId, setValues]);

  return (
    <Edit saveButtonProps={saveButtonProps} title={title}>
      <Form
        {...formProps}
        layout="vertical"
        onValuesChange={handleValuesChange}
      >
        {memoizedHiddenFields}
        {useCreateFields(columns, entityResource, formProps)}
      </Form>
    </Edit>
  );
});
