import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/notes');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNoteById = createAsyncThunk(
  'notes/fetchNoteById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/notes/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNote = createAsyncThunk(
  'notes/addNote',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/notes', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeNote = createAsyncThunk(
  'notes/removeNote',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/notes/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
