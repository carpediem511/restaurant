import { useState, useEffect } from "react";
import TemplateOfDish from "./TemplateOfDish";
import OrderForm from "./OrderForm";
import SendOrder from "./SendOrder";
import ErrorModal from "components/HomePage/ErrorModal";

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
	const [fillInForm, setFillInForm] = useState(false)
	const [error, setError] = useState(false)

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

	/*	общая стоимость и количество блюд в корзине*/
	const calculateTotal = () => ({
		price: cart.reduce((previous, current) => previous + current.price * current.quantity, 0),
		quantity: cart.reduce((previous, current) => previous + current.quantity, 0),
	});

	const [total, setTotal] = useState(calculateTotal());

	/* удаление из корзины по id*/
	const removeItemFromCart = (id) => {
		setCart((cart) => cart.filter((itemInCart) => id !== itemInCart.id));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const data = {
				customerName: customerName,
				phone: phone,
				email: email,
				restaurantId: restaurantId,
				cartItems: cart,
			};

			const response = await fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants/order", {
				method: "POST",
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to send order");
			}

			const responseData = await response.json();
			setRequestStatus("success");
			setFillInForm(false);
			setCart([]);
		} catch (error) {
			setRequestStatus("error");
		}
	};

	return (
		<>
			<div className="max-w-screen-xl py-48 mx-auto px-4 md:px-8">
				<div className="items-start justify-between md:flex">
					<div className="max-w-lg mt-10">
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
								<th className="py-3 px-6">Итоговая стоимость</th>
								<th className="py-3 px-6"> </th>
							</tr>
						</thead>
						<tbody>
							{cart.length === 0 ? (
								<tr>
									<td colSpan='5'>Ваша корзина пуста.</td>
								</tr>

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

								<td>{total.price.toFixed(2)}</td>

							</tr>
						</tbody>
					</table>


				</div>

				<button
					onClick={() => setFillInForm(true)}
					className="mt-6 bg-red-600 text-white p-2 rounded-lg hover:bg-red-800"
					id="restaurantId"
				>
					Оформить заказ
				</button>

				{fillInForm && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<div className="bg-white p-8 rounded-lg mt-48">
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
								requestStatus={requestStatus}
								restaurantName={restaurantId.name}
								onError={(message) => setError(message)}
							/>
							{error && <ErrorModal message={error} onClose={() => setError(null)} />}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default CartBody;
