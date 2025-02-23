
let contacts = [
  {
    id: 1,
    fullName: "Juan Perez",
    phoneNumber: 8097884566,
    email: "juan.perez@example.com"
  },
  {
    id: 2,
    fullName: "Ana Gomez",
    phoneNumber: 8496523354,
    email: "ana.gomez@example.com"
  },
  {
    id: 3,
    fullName: "Carlos Sanchez",
    phoneNumber: 8295563655,
    email: "carlos.sanchez@example.com"
  }
];

function addContact(contact) {
  contacts.push(contact);
}

module.exports = { contacts, addContact };