import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setDarkMode } from '../redux/redux-slice/dashboard-slice'

const ThemeToggle = () => {
	const { darkMode } = useAppSelector((state) => state.dashboard)
	const disptach = useAppDispatch()
	return (
		<Button
			display={'grid'}
			placeItems={'center'}
			height={'2rem'}
			alignSelf={'center'}
			bg={'transparent'}
			onClick={() => disptach(setDarkMode(!darkMode))}
		>
			{darkMode === true ? (
				<BsFillMoonFill />
			) : (
				<BsFillSunFill className='toggle-icon' />
			)}
		</Button>
	)
}

export default ThemeToggle
