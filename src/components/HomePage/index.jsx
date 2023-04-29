import HeroSection from "./HeroSection";
import AboutCompany from "./AboutCompany";
import ChooseRestaurant from "./ChooseRestaurant";
import Reviews from "./Reviews";
import Form from "./Form";

const HomePage = () => {
	return (
		<>
			<HeroSection />

			<AboutCompany />

			<div className="content py-20 ">
				<ChooseRestaurant />

				<Reviews />

				<Form />
			</div>
		</>
	);
};

export default HomePage;
