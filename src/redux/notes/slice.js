import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, addNote, removeNote } from './operations';

const initialState = {
    items: [],
    currentNote: {},
    isLoading: false,
    error: null,
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNotes.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchNotes.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            });

        builder
            .addCase(addNote.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addNote.fulfilled, (state, { payload }) => {
                state.items.push(payload);
                state.error = null;
                state.isLoading = false;
            })
            .addCase(addNote.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            });

        builder
            .addCase(removeNote.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeNote.fulfilled, (state, { payload }) => {
                const index = state.items.findIndex(
                    (note) => note.id === payload.id
                );
                state.items.splice(index, 1);
                state.error = null;
                state.isLoading = false;
            })
            .addCase(removeNote.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            });
    },
});

export const notesReducer = notesSlice.reducer;
