import { Flex, Button, Show } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa'
import { setShowSmallBar } from '../redux/redux-slice/dashboard-slice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Logo from './Logo'
import NavLinks from './NavLinks'

const SmallSideBar = () => {
	const { showSmallBar } = useAppSelector((state) => state.dashboard)
	const dispatch = useAppDispatch()

	return (
		<Show below='lg'>
			<Flex
				position={'fixed'}
				visibility={'visible'}
				background={'rgba(0, 0, 0, 0.7)'}
				inset={0}
				justifyContent={'center'}
				alignItems={'center'}
				zIndex={{ base: showSmallBar === false ? -1 : 99 }}
				opacity={{ base: showSmallBar === false ? 0 : 1 }}
			>
				<Flex
					borderRadius='md'
					h={'95vh'}
					w={'90vw'}
					background={'#ffff'}
					position={'relative'}
					alignItems={'center'}
					flexDirection={'column'}
					p={'4rem 2rem'}
				>
					<Button
						position={'absolute'}
						top={'10px'}
						left={'10px'}
						background={'transparent'}
						fontSize={'2rem'}
						onClick={() => dispatch(setShowSmallBar())}
					>
						<FaTimes />
					</Button>
					<Logo />
					<NavLinks />
				</Flex>
			</Flex>
		</Show>
	)
}

export default SmallSideBar
