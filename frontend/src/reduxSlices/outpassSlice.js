import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

const outpassSlice = createSlice({
    name: 'outpass',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createOutpass.fulfilled, (state, action) => {
                state.push(action.payload)
            })
            .addCase(createOutpass.rejected, (state, action) => {
                console.log('Hello')
                console.log(action.error.message)
            })
    }
})

export const createOutpass = createAsyncThunk('outpass/createoutpass', async (outpass) => {
    const response = await axios.post("http://localhost:5000/api/outpass/", outpass)
    return response.data
})

export default outpassSlice.reducer