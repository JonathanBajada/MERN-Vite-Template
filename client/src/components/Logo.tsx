import logo from '../assets/images/logo.svg'
import { Image as ChakraImage } from '@chakra-ui/react'
const Logo = (props: { logoW: string }) => {
	return <ChakraImage src={logo} w={props.logoW} alt='Jobify' />
}

export default Logo
