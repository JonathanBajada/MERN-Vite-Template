import {
	Container,
	FormControl,
	FormLabel,
	Card,
	Input,
	CardHeader,
	Center,
	Heading,
	FormErrorMessage,
	Button,
	Text as ChakraText,
	Link as ChakraLink,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link as ReactRouterLink } from "react-router-dom";
import { Logo } from "../components";

const Register = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	function onSubmit(values) {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 3000);
		});
	}

	return (
		<Container
			width={"90%"}
			maxW={"1120px"}
			h="100vh"
			display={"flex"}
			justifyContent={"center"}
			flexDirection={"column"}
			alignItems={"center"}>
			<Card width={"90%"} maxW={"800px"} p="4" py="8">
				<CardHeader display={"flex"} flexDirection={"column"}>
					<Center mb={"2rem"}>
						<Logo />
					</Center>
					<Center>
						<Heading as="h3" size={"md"}>
							Register
						</Heading>
					</Center>
				</CardHeader>

				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={errors.name} mb={4}>
						<FormLabel htmlFor="name">Name</FormLabel>
						<Input
							type="text"
							id="name"
							defaultValue={"John"}
							{...register("name", {
								required: "This is required",
								minLength: { value: 4, message: "Minimum length should be 4" },
							})}
						/>
						<FormErrorMessage>
							{errors.name && errors.name.message}
						</FormErrorMessage>
					</FormControl>
					<Button
						w={"100%"}
						mb={4}
						colorScheme="teal"
						isLoading={isSubmitting}
						type="submit">
						Submit
					</Button>
					<Center>
						<ChakraText>
							Already a member?{" "}
							<ChakraLink color={"#2cb1bc"} as={ReactRouterLink}>
								Login
							</ChakraLink>
						</ChakraText>
					</Center>
				</form>
			</Card>
		</Container>
	);
};

export default Register;
