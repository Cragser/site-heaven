"use client";

import DocumentControl from "@/lib/ui-control/document/document-control";
import { PersonResponse } from "@page/types/data/person.type";
import { mockPerson } from "@client/test/mock/person.mock";
import { mockDocument } from "@client/test/mock/document.mock";

const chapters = [];

const createChapters = () => {
  const data: PersonResponse = mockPerson;
};

export default function Page() {
  const title = "TTRA";
  const subtitle = "Perfil Corporativo de persona física";

  return <DocumentControl {...mockDocument} />;
}
