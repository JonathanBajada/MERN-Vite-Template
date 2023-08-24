import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<>
			{/* <Box bg="#4444" w="100%" p={4} color="white">
				This is the Box
			</Box> */}
			<Outlet />
		</>
	);
};

export default HomeLayout;
