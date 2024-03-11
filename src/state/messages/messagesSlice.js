import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {},
  reducers: {
    addMessage: (state, action) => {
      const { dialogId, message } = action.payload;
      if (!state[dialogId]) {
        state[dialogId] = []
      }
      state[dialogId].push(message)
    },
  },
});

export const { addMessage, removeMessage } = messagesSlice.actions
export default messagesSlice.reducer
