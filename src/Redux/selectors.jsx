export const getContacts = ({ contacts }) => contacts.items;
export const getFilteredContact = ({ contacts }) => contacts.filter; 
export const getLoading = ({contacts}) => contacts.loading;
export const getError = ({contacts}) => contacts.error;