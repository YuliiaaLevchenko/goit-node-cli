const { program } = require('commander');
const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list': 
        const contacts = await listContacts();
        console.table(contacts);
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

  program
  .option('-a, --action <type>', 'action type')
  .option('-i, --id <type>', 'contact ID')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone')
  .parse(process.argv);

  const options = program.opts();
invokeAction(options);