import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contacts-operation';


const initialState = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
        filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload)
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  }

});



export const { filterContact } =
  contactSlice.actions;

export default contactSlice.reducer;

