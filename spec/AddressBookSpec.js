describe("AddressBook", function() {
    it('Should add new contact to address book', function() {
        var addressBook = new AddressBook(),
        newContact = new Contact();

        addressBook.addContact(newContact);
        expect(addressBook.getContact(0)).toBe(newContact);
    })

    it('Should be able to delete contact', function() {
        var addressBook = new AddressBook(),
        newContact = new Contact();

        addressBook.addContact(newContact);
        var contactsBefore = addressBook.getContacts().length;
        addressBook.removeContact(newContact);
        var contactsAfter = addressBook.getContacts().length;

        expect(contactsBefore).toEqual(contactsAfter + 1);
    });
});