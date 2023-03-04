export const getAllContacts = ({contacts}) => contacts.items;

export const getMainContacts = ({contacts}) => {
const mainСontacts = contacts.items.filter(({ main }) => main);
    return mainСontacts;
}
export const getFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts.items
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
}