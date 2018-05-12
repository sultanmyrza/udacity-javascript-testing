describe("AddressBook", function() {
    var addressBook,
        newContact;
        
    beforeEach(function() {
        addressBook = new AddressBook();
        newContact = new Contact();
    });

    it('Should add new contact to address book', function() {
        addressBook.addContact(newContact);
        expect(addressBook.getContact(0)).toBe(newContact);
    });

    it('Should be able to delete contact', function() {
        addressBook.addContact(newContact);
        var contactsBefore = addressBook.getContacts().length;
        addressBook.removeContact(newContact);
        var contactsAfter = addressBook.getContacts().length;

        expect(contactsBefore).toEqual(contactsAfter + 1);
    });
});