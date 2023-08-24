import { useRouteError } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import {
	Image as ChakraImage,
	Heading,
	Container,
	Text as ChakraText,
	Link as ChakraLink,
} from "@chakra-ui/react";

const ErrorPage = () => {
	const error: any = useRouteError();
	console.log(error);

	if (error.status === 404) {
		return (
			<Container
				h={"100vh"}
				justifyContent={"center"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}>
				<ChakraImage src={img} alt="error" mb={"2rem"} />
				<Heading as="h3" size="lg">
					Oops! Page not found
				</Heading>
				<ChakraText mb={"1rem"}>
					we can't seem to find the page you are looking for
				</ChakraText>
				<ChakraLink
					color="#2cb1bc"
					as={ReactRouterLink}
					to="/login"
					textDecor="underline">
					Back to Home
				</ChakraLink>
			</Container>
		);
	}

	return (
		<Container alignItems={"center"}>
			<Heading as="h3" size="lg">
				Something went wrong
			</Heading>
		</Container>
	);
};

export default ErrorPage;
