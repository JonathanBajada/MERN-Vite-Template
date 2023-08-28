import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
	HomeLayout,
	Register,
	Login,
	ErrorPage,
	DashboardLayout,
	AddJob,
	Stats,
	AllJobs,
	Profile,
	Admin,
} from './pages'
import Landing from './pages/Landing'
import { extendTheme } from '@chakra-ui/react'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
	styles: {
		global: {
			body: { bg: '#f8fafc' },
		},
	},
	colors: {
		brand: {
			primary: '#2cb1bc',
		},
	},
})

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomeLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Landing />,
				},
				{
					path: 'register',
					element: <Register />,
				},
				{
					path: 'login',
					element: <Login />,
				},
				{
					path: 'dashboard',
					element: <DashboardLayout />,
					children: [
						{
							index: true,
							element: <AddJob />,
						},
						{
							path: 'stats',
							element: <Stats />,
						},
						{
							path: 'all-jobs',
							element: <AllJobs />,
						},
						{
							path: 'profile',
							element: <Profile />,
						},
						{
							path: 'admin',
							element: <Admin />,
						},
					],
				},
			],
		},
	])

	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ChakraProvider>
	)
}

export default App
