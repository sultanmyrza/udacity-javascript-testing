describe("AddressBook", function() {
    var addressBook = new AddressBook(),
        newContact = new Contact();
    it('Should add new contact to address book', function() {
        addressBook.addContact(newContact);
        expect(addressBook.getContact(0)).toBe(newContact);
    })
});