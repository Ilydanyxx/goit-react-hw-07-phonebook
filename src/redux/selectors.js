import { createSelector } from '@reduxjs/toolkit';

export const selectFilterValue = state => state.filter;
export const selectContactsItems = state => state.contacts.items;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectFilterValue],
  (contacts, value) => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    const normalizedValue = value.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  }
);