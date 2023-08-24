import {
	Box,
	Image as ChakraImage,
	Flex as Navigation,
	Text as ChakraText,
	Grid,
	GridItem,
	Heading,
	Container,
} from "@chakra-ui/react";
import main from "../assets/images/main.svg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Logo } from "../components";

const Landing = () => {
	return (
		<Box>
			{/* nav */}
			<Navigation
				w="90vw"
				maxW="1120px"
				mx="auto"
				h="6rem"
				mb="-6rem"
				alignItems="center">
				<Logo />
			</Navigation>

			<Container w="90vw" maxW="1120px">
				<Grid
					alignItems="center"
					minH="100vh"
					templateColumns={{ lg: "1fr 400px" }}
					columnGap="3rem">
					<GridItem w="100%">
						<Heading mb="1.5rem">
							Job{" "}
							<ChakraText as="span" color="#2cb1bc">
								Tracking{" "}
							</ChakraText>
							App
						</Heading>

						<ChakraText lineHeight={2} mb={"1.5rem"}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Architecto deserunt nisi quia dolores, soluta non ea impedit,
							earum voluptatum eum harum debitis eaque, itaque natus! Quos
							sapiente laboriosam itaque ipsam.
						</ChakraText>

						<ButtonGroup spacing="4">
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
					</GridItem>

					<GridItem w="100%">
						<ChakraImage
							src={main}
							objectFit="cover"
							display={{ lg: "block", sm: "none" }}
						/>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

export default Landing;
