import { getAllContacts, getContactById } from '../services/contacts';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts();
  res.status(200).json({
    status: 200,
    data: contacts,
    message: 'Successfully found contacts!',
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    next(new Error('Student not found'));
    return;
  }
  res.json({
    status: 200,
    message: 'Successfully found contact with id {contactId}!',
    data: contact,
  });
};
