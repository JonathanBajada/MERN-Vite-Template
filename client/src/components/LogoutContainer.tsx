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
