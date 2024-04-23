const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list': 
        const contacts = await listContacts();
        console.log('All contacts:', contacts);
        break;
  
      case 'get': 
        const contact = await getContactById(id);
        if (contact) {
          console.log(`Contact with ID ${id}:`, contact);
        } else {
          console.log(`No contact found with ID ${id}`);
        }
        break;
  
      case 'add': 
        const newContact = await addContact(name, email, phone);
        console.log('Added new contact:', newContact);
        break;
  
      case 'remove': 
        const removedContact = await removeContact(id);
        if (removedContact) {
          console.log(`Removed contact with ID ${id}:`, removedContact);
        } else {
          console.log(`No contact found with ID ${id} to remove`);
        }
        break;
  
      default:
        console.log('Unknown action:', action);
    }
  }