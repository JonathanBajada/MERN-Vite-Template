import { Box, Container, Show } from '@chakra-ui/react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { useAppSelector } from '../redux/hooks'

const BigSideBar = () => {
	const { showSmallBar } = useAppSelector((state) => state.dashboard)

	return (
		<Show above='lg'>
			<Box
				minH={'100vh'}
				h={'100%'}
				w={'250px'}
				marginLeft={showSmallBar === true ? '0px' : '-250px'}
				transition={'margin-left 0.3s ease-in-out'}
				boxShadow={'1px 0px 0px 0px rgba(0, 0, 0, 0.1);'}
			>
				<Container position={'sticky'} top={0}>
					<Box>
						<Logo />
					</Box>
					<NavLinks />
				</Container>
			</Box>
		</Show>
	)
}

export default BigSideBar
