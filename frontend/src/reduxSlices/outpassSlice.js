import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {}

const outpassSlice = createSlice({
    name: 'outpass',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase()
    }
})

