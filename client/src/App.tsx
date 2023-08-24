import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	HomeLayout,
	Register,
	Login,
	ErrorPage,
	DashboardLayout,
} from "./pages";
import Landing from "./pages/Landing";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Landing />,
				},
				{
					path: "register",
					element: <Register />,
				},
				{
					path: "login",
					element: <Login />,
				},
				{
					path: "DashboardLayout",
					element: <DashboardLayout />,
				},
			],
		},
	]);

	return (
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}

export default App;
