import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './redux-slice/dashboard-slice'
import userReducer from './redux-slice/user-slice'

export const store = configureStore({
	reducer: { dashboard: dashboardReducer, user: userReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
