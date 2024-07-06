import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const postData = createAsyncThunk(
    'posts/createPost',
    async (user) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
)

const initialState = {
    status: 'idle'
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postData.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(postData.fulfilled, (state, action) => {
            state.status = 'idle'
        })
        builder.addCase(postData.rejected, (state, action) => {
            state.status = 'idle'
        })
    }
})

export const {  } = formSlice.actions

export default formSlice.reducer