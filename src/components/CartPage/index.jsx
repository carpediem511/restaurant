import { useState, useEffect } from "react";
import TemplateOfDish from "./TemplateOfDish";
import OrderForm from "./OrderForm";

const CartBody = () => {
	/*	получение текущих блюд из localStorage или пустого массива, если данных в localStorage нет*/
	const currentDishes = JSON.parse(localStorage.getItem("cart")) || [];
	/*состояние корзины. по умолчанию - массив, полученный из localStorage и отфильтрованный*/
	const [cart, setCart] = useState(currentDishes);
	const [customerName, setCustomerName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [restaurantId, setRestaurantId] = useState("");
	const [requestStatus, setRequestStatus] = useState("");

	/*	общая стоимость и количество блюд в корзине*/
	const [total, setTotal] = useState({
		price:
			cart.length > 0
				? cart.reduce((previous, current) => previous + current.price * current.quantity, 0)
				: 0,
		quantity:
			cart.length > 0
				? cart.reduce((previous, current) => previous + current.quantity, 0)
				: 0,
	});

	/*	обновление общей стоимости и количества блюд в корзине при изменении корзины*/
	useEffect(() => {
		setTotal({
			price:
				cart.length > 0
					? cart.reduce((previous, current) => previous + current.price * current.quantity, 0)
					: 0,
			quantity:
				cart.length > 0
					? cart.reduce((previous, current) => previous + current.quantity, 0)
					: 0,
		});
	}, [cart]);

	/* удаление из корзины по id*/
	const removeItemFromCart = (id) => {
		setCart((cart) => cart.filter((itemInCart) => id !== itemInCart.id));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			customerName: customerName,
			phone: phone,
			email: email,
			restaurantId: restaurantId,
			cartItems: cart,
		};

		fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants/order", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				setRequestStatus("success");
				setCart(data.cartItems);
				setCart([]);
			})
			.catch((error) => {
				setRequestStatus("error");
			});
	};

	return (
		<>
			<div className="max-w-screen-xl py-48 mx-auto px-4 md:px-8">
				<div className="items-start justify-between md:flex">
					<div className="max-w-lg">
						<h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
							Ваша корзина
						</h3>
					</div>
				</div>

				<div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
					<table className="w-full table-auto text-sm text-left">
						<thead className="bg-gray-50 text-gray-600 font-medium border-b">
							<tr>
								<th className="py-3 px-6 ">Наименование блюда</th>
								<th className="py-3 px-6">Количество</th>
								<th className="py-3 px-6">Цена за блюдо</th>
								<th className="py-3 px-6">Итого за блюдо</th>
								<th className="py-3 px-6"> </th>
							</tr>
						</thead>
						{cart.length === 0 ? (
							<p>Ваша корзина пуста.</p>
						) : (
							cart.map((itemInCart) => (
								<TemplateOfDish
									itemInCart={itemInCart}
									key={itemInCart.id}
									removeItemFromCart={removeItemFromCart}
								/>
							))
						)}
						<tr>
							<td>Стоимость заказа:</td>

							<td>{total.price}</td>

						</tr>
					</table>


				</div>
				<OrderForm
					cart={cart}
					customerName={customerName}
					phone={phone}
					email={email}
					restaurantId={restaurantId}
					setCustomerName={(value) => setCustomerName(value)}
					setPhone={(value) => setPhone(value)}
					setEmail={(value) => setEmail(value)}
					setRestaurantId={(value) => setRestaurantId(value)}
					onSubmit={handleSubmit}
				/>



				<button className="mt-6 bg-red-600 text-white p-2 rounded-lg hover:bg-red-800">
					Оформить заказ
				</button>

			</div>
		</>
	);
};

export default CartBody;
