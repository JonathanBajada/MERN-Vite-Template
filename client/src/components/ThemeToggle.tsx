import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { Button, useColorMode } from '@chakra-ui/react'

const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button
			display={'grid'}
			placeItems={'center'}
			height={'2rem'}
			alignSelf={'center'}
			bg={'transparent'}
			onClick={() => {
				toggleColorMode()
			}}
		>
			{colorMode === 'dark' ? (
				<BsFillMoonFill />
			) : (
				<BsFillSunFill className='toggle-icon' />
			)}
		</Button>
	)
}

export default ThemeToggle
