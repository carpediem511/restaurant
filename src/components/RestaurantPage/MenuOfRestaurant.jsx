import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FlapperSpinner } from "react-spinners-kit";
import Count from "./Count";
import { PlusIcon } from "@heroicons/react/24/solid";

const MenuOfRestaurant = () => {
	const { slug } = useParams();

	const [restaurant, setRestaurant] = useState({});
	const [dishes, setDishes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showComponent, setShowComponent] = useState(false);
	const [cart, setCart] = useState([]);
	const [selectedDishes, setSelectedDishes] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
			.then((response) => response.json())
			.then(
				(result) => {
					setRestaurant(result);
				},
				(error) => {
					console.log(error);
				}
			);
	}, [slug]);

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`
		)
			.then((response) => response.json())
			.then(
				(result) => {
					setDishes(result);
					setLoading(false);
					localStorage.setItem("dishes", JSON.stringify(result));
				},
				(error) => {
					console.log(error);
					setLoading(false);
				}
			);
	}, [slug]);

	// Создаем функцию, которая добавляет товар в корзину
	const addToCart = (dishInCart) => {
		// Проверяем есть ли уже товары в корзине
		if (cart.length > 0) {
			// Проверяем, добавляется ли товар из одного ресторана
			if (cart[0].restaurant !== dishInCart.restaurant) {
				// Если товар добавляется из другого ресторана, предлагаем очистить корзину
				const clearCart = window.confirm(
					"Вы пытаетесь добавить товар из другого ресторана! Текущие блюда в корзине будут удалены! Хотите продолжить?"
				);
				if (clearCart) {
					// Если пользователь согласился очистить корзину, то очищаем ее
					setCart([dishInCart]);
					localStorage.setItem("cart", JSON.stringify([dishInCart]));
				}
			} else {
				// Если товар добавляется из того же ресторана, то добавляем его в корзину
				setCart((prevCart) => [...prevCart, dishInCart]);
				localStorage.setItem("cart", JSON.stringify([...cart, dishInCart]));
			}
		} else {
			// Если в корзине нет товаров, то добавляем новый товар
			setCart([dishInCart]);
			localStorage.setItem("cart", JSON.stringify([dishInCart]));
		}
	};

	return (
		<>
			{/*ПОЧЕМУ-ТО СТРАНИЦА ПОКАЗЫВАЕТСЯ С КОНЦА*/}
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
				{loading ? (
					<div className="flex justify-center items-center h-screen">
						<FlapperSpinner size={50} color="#4F46E5" />
					</div>
				) : (
					<div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
						{dishes.map((dish) => (
							<div
								key={dish.id}
								className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
							>
								<div className="relative w-full h-48">
									<img
										src={dish.image}
										className="object-cover w-full h-full rounded-t"
										alt=""
									/>
								</div>
								<div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
									<div className="grid auto-cols-auto flex-grow">
										<div className="flex flex-col">
											<div className="text-2xl font-semibold">{dish.name}</div>
											<div className="text-sm text-gray-900 flex-grow">
												{dish.description}
											</div>
											<div className="mt-1 mb-4 mr-1 text-lg font-bold sm:text-5xl">
												{dish.price} Lira
											</div>
										</div>
									</div>

									{selectedDishes.includes(dish.id) && (
										<Count
											dishID={dish.id}
											cart={cart}
											setCart={setCart}
											setShowComponent={setShowComponent}
											selectedDishes={selectedDishes}
											setSelectedDishes={setSelectedDishes}
										/>
									)}

									{!selectedDishes.includes(dish.id) && (
										<button
											onClick={() => addToCart(dish.id)}
											className="border flex py-2 rounded-xl justify-center w-full"
										>
											<PlusIcon className="w-6" />
											<p>Добавить в корзину</p>
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default MenuOfRestaurant;
