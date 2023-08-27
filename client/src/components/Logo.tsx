import React from 'react'
import logo from '../assets/images/logo.svg'
import { Image as ChakraImage } from '@chakra-ui/react'
const Logo = (props: any) => {
	return <ChakraImage src={logo} w={props.logoW} alt='Jobify' />
}

export default Logo
