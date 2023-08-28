import { createSlice } from '@reduxjs/toolkit'

export interface DashboardState {
	showSmallBar: boolean
	darkMode: boolean
}

const initialState: DashboardState = {
	showSmallBar: true,
	darkMode: false,
}

export const dashboardReducer = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setShowSmallBar: (state) => {
			state.showSmallBar = !state.showSmallBar
		},
		setDarkMode: (state) => {
			state.darkMode = !state.darkMode
		},
	},
})

// Action creators are generated for each case reducer function
export const { setShowSmallBar, setDarkMode } = dashboardReducer.actions

export default dashboardReducer.reducer
