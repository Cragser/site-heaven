import { normalizePerson } from "@components/data-display/document/util/normalize-person";

describe("normalizePerson", () => {
  it("should return an object with only string and number values and empty strings", () => {
    const input = {
      id: "object-id",
      personCompany: [{
        nickname: "Super Lugares",
        rfc: null,
      }],
    };

    const output = normalizePerson(input);

    expect(output).toEqual({
      id: "object-id",
      company: [{
        nickname: "Super Lugares",
        rfc: "",
      }],
    });
  });

  it("should return an object with only string and number values", () => {
    const input = {
      id: "object-id",
      personCompany: [{
        nickname: "Super Lugares",
        company: {
          id: "company-id",
          name: "Super Lugares",
          rfc: "HEME901231ABC",
        }
      }]
    };



    const output = normalizePerson(input);

    expect(output).toEqual({
      id: "object-id",
      company: [{
        id: "company-id",
        name: "Super Lugares",
        rfc: "HEME901231ABC",
        nickname: "Super Lugares",
      }],
    })
  })

  // Regresa el objeto con las propiedades que no tiene id en us nombre
  it("should return an object with only string and number values and empty strings", () => {
    const input = {
      id: "object-id",
      personCompany: [{
        id: "person-company-id",
        companyId: "company-id",
        company: {
          id: "company-id",
          name: "Super Lugares",
          rfc: "HEME901231ABC",
        }
      }]
    };

    const output = normalizePerson(input);

    expect(output).toEqual({
      id: "object-id",
      company: [{
        id: "company-id",
        name: "Super Lugares",
        rfc: "HEME901231ABC",
      }],
    })
  })

  it("should return an object with only string and number values and empty strings", () => {
    const input = {
      id: "object-id",
      address: {
        id: "address-id",
        personId: "person-id",
        name: "Super Lugares",
      }
    }

    const output = normalizePerson(input);

    expect(output).toEqual({
      person: {
        id: "person-id",
      },
      input
    })
  })



});
