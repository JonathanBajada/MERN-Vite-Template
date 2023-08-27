import { Box, Container, Show } from '@chakra-ui/react'
import NavLinks from './NavLinks'
import Logo from './Logo'
// import { useAppDispatch, useAppSelector } from '../redux/hooks'

const BigSideBar = () => {
	// const { showSmallBar } = useAppSelector((state) => state.dashboard)
	// const dispatch = useAppDispatch()

	return (
		<Show above='lg'>
			<Box
				minH={'100vh'}
				h={'100%'}
				w={'250px'}
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

/*

  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }

    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }

*/
