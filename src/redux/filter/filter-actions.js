import { FILTER_CONTACTS } from './filter-types';

import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction(FILTER_CONTACTS);
