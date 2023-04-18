import NavBar from 'components/Navbar';
import './App.css'
import Reviews from 'components/Reviews';
import Form from 'components/Form';
import Footer from 'components/Footer';
import ChooseRestaurant from '../Restaurant/ChooseRestaurant';
import HeroSection from './HeroSection';
import AboutCompany from './AboutCompany';

function App() {
	return (
		<>
			<div className='background-main'>
				<div className='bg-gray-950/50'>
					<NavBar />

					<HeroSection />
				</div>
			</div >

			<AboutCompany />
			<div className="border-b border-gray-900/10 pb-12"></div>
			<div className='content py-20 '>

				<ChooseRestaurant />

				<Reviews />

				<Form />
			</div>
			<div className="border-b border-gray-900/10 pb-12"></div>

			<Footer />

		</>
	);
}

export default App;
