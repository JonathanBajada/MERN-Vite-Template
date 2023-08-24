import {
	Box,
	Image as ChakraImage,
	Flex,
	Text as ChakraText,
	Heading,
	Container,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Landing = () => {
	return (
		<Box>
			{/* nav */}
			<Flex p="4">
				<Box>
					<ChakraImage src={logo} />
				</Box>
			</Flex>

			<Container maxW="container.sm">
				<Heading>
					Job{" "}
					<ChakraText as="span" color="#2cb1bc">
						Tracking{" "}
					</ChakraText>
					App
				</Heading>

				<ChakraText mt="4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
					deserunt nisi quia dolores, soluta non ea impedit, earum voluptatum
					eum harum debitis eaque, itaque natus! Quos sapiente laboriosam itaque
					ipsam.
				</ChakraText>

				<ButtonGroup spacing="4" mt="4">
					<Button bg="#2cb1bc">
						<ChakraLink color="#ffff" as={ReactRouterLink} to="/register">
							Register
						</ChakraLink>
					</Button>

					<Button bg="#2cb1bc">
						<ChakraLink color="#ffff" as={ReactRouterLink} to="/login">
							Login / Demo User
						</ChakraLink>
					</Button>
				</ButtonGroup>
			</Container>

			<Box>
				<ChakraImage src={main} />
			</Box>
		</Box>
	);
};

export default Landing;
