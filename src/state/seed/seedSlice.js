import { createSlice } from "@reduxjs/toolkit";

const seedSlice = createSlice({
    name: 'seed',
    initialState: '',
    reducers: {
        setSeed: (state, action) => {
            return action.payload
        }
    }
})

export const { setSeed } = seedSlice.actions
export default seedSlice.reducer