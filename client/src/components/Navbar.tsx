import { Flex, Heading, Button, useTheme, Box } from '@chakra-ui/react'
import { FaAlignLeft } from 'react-icons/fa'
import Logo from './Logo'
import { setShowSmallBar } from '../redux/redux-slice/dashboard-slice'
import { useAppDispatch } from '../redux/hooks'
import LogoutContainer from './LogoutContainer'
// import ThemeToggle from './ThemeToggle'

const Navbar = () => {
	const theme = useTheme()
	const dispatch = useAppDispatch()

	return (
		<Flex
			background={'#ffff'}
			h={'6rem'}
			justifyContent={'center'}
			boxShadow={' 0 1px 0 0 rgba(0, 0, 0, 0.1)'}
			position={{ lg: 'sticky' }}
			top={{ lg: '0' }}
		>
			<Flex
				justifyContent={'space-between'}
				alignItems={'center'}
				w={{ base: '90vw', lg: '90%' }}
			>
				<Button
					onClick={() => dispatch(setShowSmallBar())}
					style={{ cursor: 'pointer' }}
					background={'transparent'}
				>
					<FaAlignLeft color={theme.colors.brand['primary']} />
				</Button>
				<Box display={{ base: 'flex', lg: 'none' }}>
					<Logo logoW={'100px'}></Logo>
				</Box>
				<Heading
					as={'h2'}
					size={'md'}
					display={{ base: 'none', lg: 'block' }}
				>
					Dashboard
				</Heading>
				<Box display={'flex'} gap={5}>
					{/* <ThemeToggle /> */}
					<LogoutContainer />
				</Box>
			</Flex>
		</Flex>
	)
}

export default Navbar
