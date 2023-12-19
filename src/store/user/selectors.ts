import { RootState } from 'store';
import { createSelector } from '@reduxjs/toolkit';

const notificationStoreSelector = (state: RootState): any => state.user;

export const roleSelector = createSelector(
    notificationStoreSelector,
    state => state.name
);