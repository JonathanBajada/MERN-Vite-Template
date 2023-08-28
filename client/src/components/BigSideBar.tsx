import { Box, Container, Show } from '@chakra-ui/react'
import NavLinksBig from './NavLinksBig'
import Logo from './Logo'
import { useAppSelector } from '../redux/hooks'

const BigSideBar = () => {
	const { showSmallBar } = useAppSelector((state) => state.dashboard)

	return (
		<Show above='lg'>
			<Box
				bgColor={'#ffff'}
				minH={'100vh'}
				h={'100%'}
				w={'250px'}
				marginLeft={showSmallBar === true ? '0px' : '-250px'}
				transition={'margin-left 0.3s ease-in-out'}
				boxShadow={'1px 0px 0px 0px rgba(0, 0, 0, 0.1);'}
			>
				<Container position={'sticky'} top={0}>
					<header
						style={{
							height: '6rem',
							display: 'flex',
							alignItems: 'center',
							paddingLeft: '2rem',
						}}
					>
						<Logo />
					</header>
					<Box pl={'2rem'}>
						<NavLinksBig />
					</Box>
				</Container>
			</Box>
		</Show>
	)
}

export default BigSideBar
