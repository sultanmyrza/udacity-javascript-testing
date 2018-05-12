function AddressBook() {
    this.contacts = [];
    this.addContact = function(newContact) {
        this.contacts.push(newContact);
    }
    this.getContact = function(index) {
        return this.contacts[index];
    }
}