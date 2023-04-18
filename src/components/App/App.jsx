import NavBar from 'components/Navbar';
import './App.css'
import Reviews from 'components/Reviews';
import Form from 'components/Form';
import Footer from 'components/Footer';
import ChooseRestaurant from '../Restaurant/ChooseRestaurant';
import HeroSection from './HeroSection';
import AboutCompany from './AboutCompany';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RestaurantPage from 'components/Restaurant/restaurantPage';

function App() {
	return (
		<>
			<BrowserRouter>

				<NavBar />

				<Routes>
					<Route path='*' element={
						<>
							<HeroSection />

							<AboutCompany />

							<div className='content py-20 '>

								<ChooseRestaurant />

								<Reviews />

								<Form />
							</div>
						</>
					}

					/>
					<Route path='/restaurant' element={<RestaurantPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
