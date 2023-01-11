import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
