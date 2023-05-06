import { Link } from "react-router-dom";
import DescriptionOfRestaurant from "./DescriptionOfRestaurant";
import MenuOfRestaurant from "./MenuOfRestaurant";

const RestaurantPage = () => {
  return (
    <>
      <DescriptionOfRestaurant />
      <div className="content">
        <p className="text-4xl text-gray-800 font-semibold text-center mt-28">
          Выбрать блюда:
        </p>
        <Link
          to="/cart"
          className="p-3 float-right mt-6 rounded-xl text-lg text-white bg-red-600 hover:bg-red-800"
        >
          Перейти в корзину
        </Link>
      </div>
      <MenuOfRestaurant />
    </>
  );
};

export default RestaurantPage;
