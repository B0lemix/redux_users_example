import { createSlice } from '@reduxjs/toolkit'

export const UsersSlice = createSlice({
  name: 'users',
  initialState: {
    list: []
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setUserList } = UsersSlice.actions

export default UsersSlice.reducer
