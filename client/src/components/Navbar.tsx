import { Flex, Heading, Button, useTheme, Box } from '@chakra-ui/react'
import { FaAlignLeft } from 'react-icons/fa'
import Logo from './Logo'
import { setShowSmallBar } from '../redux/redux-slice/dashboard-slice'
import { useAppDispatch } from '../redux/hooks'
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
				<Button background={'transparent'}>toggle/logout</Button>
			</Flex>
		</Flex>
	)
}

export default Navbar
/*
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }

*/