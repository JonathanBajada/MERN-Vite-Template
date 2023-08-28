import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import { Flex, Box, useTheme } from '@chakra-ui/react'
import { Link as CLink } from '@chakra-ui/react'

const NavLinksBig = () => {
	const theme = useTheme()

	return (
		<Flex flexDirection={'column'} pt={'2rem'}>
			{links.map((link) => {
				const { text, path, icon } = link
				return (
					<CLink
						padding={'1rem 0'}
						display={'flex'}
						textTransform={'capitalize'}
						as={NavLink}
						to={path}
						key={text}
						_activeLink={{ color: theme.colors.brand.primary }}
						transition={'0.3s ease-in-out'}
						_hover={{
							color: theme.colors.brand.primary,
							paddingLeft: '1rem',
							transition: '0.3s ease-in-out',
						}}
						end
					>
						<Box
							as='span'
							mr={'1rem'}
							fontSize={'1.5rem'}
							display={'grid'}
							placeItems={'center'}
						>
							{icon}
						</Box>
						{text}
					</CLink>
				)
			})}
		</Flex>
	)
}

export default NavLinksBig
