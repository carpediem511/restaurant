import HeroSection from "./HeroSection"
import AboutCompany from "./AboutCompany"
import ChooseRestaurant from "components/Restaurant/ChooseRestaurant"
import Reviews from "components/Reviews"
import Form from "components/Form"

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
	)
}

export default HomePage