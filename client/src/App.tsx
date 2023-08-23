import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Dashboard, FAQ, Login, ErrorPage } from "./pages";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Dashboard />,
				},
				{
					path: "faq",
					element: <FAQ />,
				},
				{
					path: "login",
					element: <Login />,
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
