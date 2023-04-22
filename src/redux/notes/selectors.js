import { createSelector } from '@reduxjs/toolkit';

export const selectAllNotes = state => state.notes.items;

export const selectCurrentNotes = state => state.notes.currentNote;

export const selectComments = createSelector(
  [selectCurrentNotes],
  note => note.comments
);

export const selectIsLoading = state => state.notes.isLoading;

export const selectError = state => state.notes.error;
