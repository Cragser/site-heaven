"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { useState } from "react";
import { Divider, Switch, Typography } from "antd";
import CreateUserRelationForm from "@modules/forms/create-user-relation-form";
import RelationForm from "@modules/forms/relation-form";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const translate = useTranslate();
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: ResourceEnum.personRelation,
  });

  const [showCustomForm, setShowCustomForm] = useState(false);

  const onChange = (checked: boolean) => {
    setShowCustomForm(checked);
  };

  return (
    <div>
      <Typography.Title level={4}>
        {translate("person-relation.titles.user-exist")}
      </Typography.Title>
      <Switch defaultChecked onChange={onChange} />
      <Divider />
      {showCustomForm && (
        <Create saveButtonProps={saveButtonProps}>
          <RelationForm personId={personId} formProps={formProps} />
        </Create>
      )}
      {!showCustomForm && (
        <CreateUserRelationForm personId={personId} formProps={formProps} />
      )}
    </div>
  );
}
