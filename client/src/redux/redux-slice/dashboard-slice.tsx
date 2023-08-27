import { createSlice } from '@reduxjs/toolkit'

export interface DashboardState {
	showSmallBar: boolean
}

const initialState: DashboardState = {
	showSmallBar: false,
}

export const dashboardReducer = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setShowSmallBar: (state) => {
			state.showSmallBar = !state.showSmallBar
		},
	},
})

// Action creators are generated for each case reducer function
export const { setShowSmallBar } = dashboardReducer.actions

export default dashboardReducer.reducer
