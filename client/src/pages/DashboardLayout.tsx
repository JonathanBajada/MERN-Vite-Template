import { Outlet } from 'react-router-dom'
import { Grid, Box } from '@chakra-ui/react'
import SmallSideBar from '../components/SmallSideBar'
import BigSideBar from '../components/BigSideBar'
import Navbar from '../components/Navbar'

const DashboardLayout = () => {
	return (
		<Grid templateColumns={{ base: '1fr', lg: 'auto 1fr' }}>
			<SmallSideBar></SmallSideBar>
			<BigSideBar></BigSideBar>
			<Box>
				<Navbar />
				<Box w={{ base: '90vw', lg: '90%' }} mx={'auto'} p={'2rem 0'}>
					<Outlet />
				</Box>
			</Box>
		</Grid>
	)
}

export default DashboardLayout
