function AddressBook() {
    this.contacts = [];
    this.addContact = function(newContact) {
        this.contacts.push(newContact);
    }
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.getContacts = function() {
    return this.contacts;
}

AddressBook.prototype.removeContact = function(contactToRemove) {
    this.contacts = this.contacts.filter(contact => contact !== contactToRemove);
}