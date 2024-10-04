const documentTemplateMock = [
  {
    id: "04242016-8982-46f7-b97c-223a4 bdd4ab",
    title: "Información General",
    content:
      "<p>[person.  [person.nickname] . Su CURP es [person.curp] . Su RFC es [person.rfc].</p>",
    shouldRepeat: false,
    relatedRepeatingSection: null,
  },
  {
    id: "3da909f5-9e41-4e7f-88c0-72a46645159e",
    title: "Estudios",
    content:
      "<p>[person.name] es:</p><ul><li>[personCareer.career.name];por;[personCareer.career.school](cédula profesional [personCareer.career.cedula], emitida en [personCareer.career.endYear]);</li></ul>",
    shouldRepeat: true,
    relatedRepeatingSection: "education",
  },
];
