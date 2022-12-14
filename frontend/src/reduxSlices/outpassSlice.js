import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    currentOutpass : null,
    outpassList: [],
    status: 'toRun'
}

const outpassSlice = createSlice({
    name: 'outpass',
    initialState,
    reducers: {
        clearOutpass(state,action){
            state.currentOutpass=null
            state.outpassList=[]
            state.status='toRun'
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createOutpass.fulfilled, (state, action) => {
                state.currentOutpass = action.payload
            })
            .addCase(createOutpass.rejected, (state, action) => {
                console.log(action.error.message)
            })
            .addCase(getcurrentOutpass.fulfilled, (state, action) => {
                // if(action.payload === undefined){
                //     action.payload = ""
                // }
                state.currentOutpass = action.payload
                state.status = 'succeded'
            })
            .addCase(getAllOutpass.fulfilled, (state, action) => {
                state.outpassList = action.payload
            })
            .addCase(getAllOutpass.rejected, (state, action) => {
                console.log('hello')
            })
            .addCase(getcurrentOutpass.rejected, (state, action) => {
                state.status = 'failed'
            })
            .addCase(withdrawOutpass.fulfilled, (state, action) => {
                state.currentOutpass = ""
            })
            .addCase(withdrawOutpass.rejected, (state, action) => {
                console.log('Hello')
            })
    }
})

export const createOutpass = createAsyncThunk('outpass/createoutpass', async (outpass) => {
    const response = await axios.post("http://localhost:5000/api/outpass/", outpass)
    return response.data
})

export const getcurrentOutpass = createAsyncThunk('outpass/getCurrent', async (id) => {
    const response = await axios.get(`http://localhost:5000/api/outpass/current/${id}`)
    return response.data
})

export const withdrawOutpass = createAsyncThunk('outpass/withdrawOutpass', async(id) => {
    const response = await axios.delete(`http://localhost:5000/api/outpass/withdraw/${id}`)
    return response.data
})

export const getAllOutpass = createAsyncThunk('outpass/getAllOutpasses', async(id) => {
    const response = await axios.get(`http://localhost:5000/api/outpass/${id}`)
    return response.data
})
export const { clearOutpass } = outpassSlice.actions

export default outpassSlice.reducer