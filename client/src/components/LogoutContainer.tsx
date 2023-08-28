import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
import { Button, useTheme, Box } from '@chakra-ui/react'
import { useAppSelector } from '../redux/hooks'

const LogoutContainer = () => {
	const theme = useTheme()
	const { name } = useAppSelector((state) => state.user)
	const [showLogout, setShowLogout] = useState(false)

	return (
		<Box position={'relative'}>
			<Button
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				color={'#ffff'}
				bgColor={theme.colors.brand['primary']}
				gap={2}
				onClick={() => setShowLogout(!showLogout)}
			>
				<FaUserCircle /> {name}
				<FaCaretDown />
			</Button>
			<Box
				boxShadow={' 0 1px 0 0 rgba(0, 0, 0, 0.1)'}
				position={'absolute'}
				top={'45px'}
				w={'100%'}
				display={showLogout === true ? 'flex' : 'none'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Button
					letterSpacing={'1px'}
					color={'#ffff'}
					bg={theme.colors.brand['primary']}
					padding={'0.5rem'}
					w={'100%'}
				>
					Logout
				</Button>
			</Box>
		</Box>
	)
}

export default LogoutContainer

/*
 position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
*/
