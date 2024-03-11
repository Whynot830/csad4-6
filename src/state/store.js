import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import seedReducer from './seed/seedSlice'
import messagesReducer from './messages/messagesSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        seed: seedReducer,
        messages: messagesReducer
    },
})

