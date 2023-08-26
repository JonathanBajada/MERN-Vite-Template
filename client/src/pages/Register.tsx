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
	InputRightElement,
	InputGroup,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Link as ReactRouterLink, Form } from 'react-router-dom'
import { Logo } from '../components'
import { useState } from 'react'

const Register = () => {
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm()

	function onSubmit(values) {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2))
				resolve()
			}, 3000)
		})
	}

	return (
		<Container
			h='100vh'
			display={'flex'}
			justifyContent={'center'}
			flexDirection={'column'}
			alignItems={'center'}
		>
			<Card
				width={'90%'}
				maxW={'600px'}
				p='4'
				py='8'
				borderTop={'5px solid #2cb1bc'}
			>
				<CardHeader display={'flex'} flexDirection={'column'}>
					<Center mb={'2rem'}>
						<Logo />
					</Center>
					<Heading as='h3' size={'md'} textAlign={'center'}>
						Register
					</Heading>
				</CardHeader>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={(errors.fname, errors.lname)} mb={4}>
						<FormLabel htmlFor='fname'>First Name</FormLabel>
						<Input
							type='text'
							id='fname'
							defaultValue={'John'}
							{...register('fname', {
								required: 'This is required',
								minLength: {
									value: 4,
									message: 'Minimum length should be 4',
								},
							})}
						/>
						<FormErrorMessage>
							{errors.fname && errors.fname.message}
						</FormErrorMessage>

						<FormLabel mt='1rem' htmlFor='lname'>
							Last Name
						</FormLabel>
						<Input
							type='text'
							id='lname'
							defaultValue={'Bajada'}
							{...register('lname', {
								required: 'This is required',
								minLength: {
									value: 4,
									message: 'Minimum length should be 4',
								},
							})}
						/>
						<FormErrorMessage>
							{errors.lname && errors.lname.message}
						</FormErrorMessage>

						<FormLabel mt='1rem' htmlFor='location'>
							Location
						</FormLabel>
						<Input
							type='text'
							id='location'
							defaultValue={'Toronto'}
							{...register('location', {
								required: 'This is required',
								minLength: {
									value: 4,
									message: 'Minimum length should be 4',
								},
							})}
						/>

						<FormLabel mt='1rem' htmlFor='email'>
							Email
						</FormLabel>
						<Input
							type='email'
							id='email'
							defaultValue={'JohnBajada01@gmail.com'}
							{...register('email', {
								required: 'This is required',
								minLength: {
									value: 4,
									message: 'Minimum length should be 4',
								},
							})}
						/>

						<FormLabel mt='1rem' htmlFor='password'>
							Password
						</FormLabel>
						<InputGroup>
							<Input
								type={show ? 'text' : 'password'}
								id='password'
								defaultValue={'John'}
								{...register('password', {
									required: 'This is required',
									minLength: {
										value: 4,
										message: 'Minimum length should be 4',
									},
								})}
							/>
							<InputRightElement width='4.5rem'>
								<Button h='1.75rem' size='sm' onClick={handleClick}>
									{show ? 'Hide' : 'Show'}
								</Button>
							</InputRightElement>
						</InputGroup>
					</FormControl>
					<Button
						w={'100%'}
						mt={4}
						mb={4}
						colorScheme='teal'
						isLoading={isSubmitting}
						type='submit'
					>
						Submit
					</Button>

					<ChakraText textAlign={'center'}>
						Already a member?{' '}
						<ChakraLink
							to={'/login'}
							color={'#2cb1bc'}
							as={ReactRouterLink}
						>
							Login
						</ChakraLink>
					</ChakraText>
				</Form>
			</Card>
		</Container>
	)
}

export default Register
