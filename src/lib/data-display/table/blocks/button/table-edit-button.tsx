import React from "react";
import {
    Navigation
} from "@components/data-display/entity-collection/types/navigation.type";
import {EditButton} from "@refinedev/antd";
import {useGoTo} from "@client/hooks/navigation/use-go-to";
import {ResourceEnum} from "@lib/enums/resource.enum";

/**
 * Esto pensando en los casos.
 * 1. Una sección, siempre usa el valor por defecto
 * 2. Una sección relacionada a una entidad, crea un meta con el id de la sección y de la entidad, así que no necesita meta.
 * 3. Una entidad relacionada a otra entidad, signfica que siempre necesita meta.
 */

interface Props {
  defaultNavigation: boolean;
  navigation?: Navigation;
  record: any;
  entityResource: any;
  meta: any;
}

export default function TableEditButton({
  defaultNavigation,
  navigation,
  entityResource,
  record,
  meta,
}: Readonly<Props>) {
  const goTo = useGoTo();

  if (!defaultNavigation && !navigation) {
    console.log("defaultNavigation is false and navigation is undefined");
    return null;
  }

  if (defaultNavigation) {
    return (
      <EditButton
        hideText
        size="middle"
        onClick={() => {
          console.log("defaultNavigation is true");
          console.log(goTo);
          goTo({
            resource: entityResource,
            action: "edit",
            meta: meta,
          });
        }}
      />
    );
  }

  if (!navigation || navigation.resource === false) {
    console.log("navigation is undefined or navigation.resource is false");
    return;
  }

  return (
    //http://localhost:3000/
    // company/show/151c5429-ed52-4297-960a-e64803af49ce/
    // company-person/edit/4610c169-c0c5-462c-aea2-2c71201b782d
    <EditButton
      hideText
      size="middle"
      onClick={() => {
        console.log("defaultNavigation is false");
        goTo({
          resource: navigation?.resource as ResourceEnum,
          action: "edit",
          meta: navigation?.createMeta?.(record) ?? meta,
        });
      }}
    />
  );
}
