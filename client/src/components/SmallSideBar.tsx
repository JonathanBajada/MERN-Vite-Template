import { Flex, Button, Show, Box } from '@chakra-ui/react'
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
					borderRadius='sm'
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
					<Box>
						<Logo />
					</Box>
					<NavLinks />
				</Flex>
			</Flex>
		</Show>
	)
}

export default SmallSideBar

/*

  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }

*/
