describe("AddressBook", function() {
    var addressBook = new AddressBook(),
        newContact = new Contact();

    addressBook.addContact(newContact);
    expect(addressBook.getContact(0)).toBe(newContact);
});