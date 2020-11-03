const types = [
  { key: "office", value: "Office Space" },
  { key: "businessCenter", value: "Business Center" },
  { key: "coworking", value: "Coworking" },
  { key: "meetingRoom", value: "Meeting Room" },
  { key: "virtualOffice", value: "Virtual Office" },
];

const properties = [
  {
    name: "property 1",
    city: "Palmitinho",
    fullAddress: "Palmitinho, RS",
    officeType: types.find((type) => type.key === "office").value,
  },
  {
    name: "property 2",
    city: "Frederico Westphalen",
    fullAddress: "Frederico Westphalen, RS",
    officeType: types.find((type) => type.key === "office").value,
  },
  {
    name: "property 3",
    city: "Palmeiras",
    fullAddress: "Palmeiras, RS",
    officeType: types.find((type) => type.key === "office").value,
  },
  {
    name: "property 4",
    city: "Panambi",
    fullAddress: "Panambi, RS",
    officeType: types.find((type) => type.key === "coworking").value,
  },
  {
    name: "property 5",
    city: "Chapecó",
    fullAddress: "Chapecó, RS",
    officeType: types.find((type) => type.key === "virtualOffice").value,
  },
  {
    name: "property 6",
    city: "Chapecó",
    fullAddress: "Chapecó, RS",
    officeType: types.find((type) => type.key === "meetingRoom").value,
  },
  {
    name: "property 7",
    city: "Frederico Westphalen",
    fullAddress: "Frederico Westphalen, RS",
    officeType: types.find((type) => type.key === "office").value,
  },
  {
    name: "property 8",
    city: "Frederico Westphalen",
    fullAddress: "Frederico Westphalen, RS",
    officeType: types.find((type) => type.key === "meetingRoom").value,
  },
  {
    name: "property 9",
    city: "Frederico Westphalen",
    fullAddress: "Frederico Westphalen, RS",
    officeType: types.find((type) => type.key === "virtualOffice").value,
  },
  {
    name: "property 10",
    city: "Frederico Westphalen",
    fullAddress: "Frederico Westphalen, RS",
    officeType: types.find((type) => type.key === "coworking").value,
  },
  {
    name: "property 11",
    city: "Frederico Westphalen",
    fullAddress: "Frederico Westphalen, RS",
    officeType: types.find((type) => type.key === "office").value,
  },
];

export { properties, types };
