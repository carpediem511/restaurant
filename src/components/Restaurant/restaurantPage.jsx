import DescriptionOfRestaurant from "./DescriptionOfRestaurant";
import MenuOfRestaurant from "./MenuOfRestaurant";

const RestaurantPage = () => {

	return <>

		<DescriptionOfRestaurant />
		<p className="text-4xl text-gray-800 font-semibold text-center mt-28">
			Выбрать блюда:
		</p>
		<MenuOfRestaurant />

	</>;
};

export default RestaurantPage