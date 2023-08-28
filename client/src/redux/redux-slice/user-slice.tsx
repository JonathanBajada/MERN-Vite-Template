import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
	name: string
}

const initialState: UserState = {
	name: 'john',
}

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setName } = userReducer.actions

export default userReducer.reducer
