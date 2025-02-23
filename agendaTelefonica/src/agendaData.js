
let contacts = [
  {
    id: 1,
    fullName: "Juan Perez",
    phoneNumber: "809-788-4566",
    email: "juan.perez@example.com"
  },
  {
    id: 2,
    fullName: "Ana Gomez",
    phoneNumber: "849-652-3354",
    email: "ana.gomez@example.com"
  },
  {
    id: 3,
    fullName: "Carlos Sanchez",
    phoneNumber: "829-556-3655",
    email: "carlos.sanchez@example.com"
  }
];

function addContact(contact) {
  contacts.push(contact);
}

module.exports = { contacts, addContact };