import ErrorModal from "components/HomePage/ErrorModal";
import { useState } from "react";

const OrderForm = ({ customerName, phone, email, restaurantName, onSubmit }) => {

	const [error, setError] = useState(null)
	const [customerName, setCustomerName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [restaurantId, setRestaurantId] = useState("");
	const [requestStatus, setRequestStatus] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (!customerName || !phone || !email || !restaurantId) {
			setError("Пожалуйста, заполните все поля формы")
			return
		}
		onSubmit(event)
	}

	return (
		<>
			<form className="mt-8"
			>
				<h2 className="text-center text-xl mb-6 text-teal-500">
					Введите ваши данные для оформления заказа:
				</h2>

				<div className="mb-10">
					<div className="sm:col-span-3">
						<label
							className="block text-xl font-medium leading-6 mb-10 text-teal-700"
							htmlFor="restaurant"
						>
							Заказ из ресторана "{restaurantName}"
						</label>
					</div>
					<div className="sm:col-span-3">
						<label
							htmlFor="name"
							className="block text-base font-medium leading-6 text-gray-900"
						>
							Фамилия и имя
						</label>
						<div className="mt-2">
							<input
								type="text"
								name="name"
								id="name"
								value={customerName}
								onChange={(e) => setCustomerName(e.target.value)}
								className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="sm:col-span-4">
						<label
							htmlFor="email"
							className="block text-base font-medium leading-6 text-gray-900"
						>
							Адрес электронной почты
						</label>
						<div className="mt-2">
							<input
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								type="email"
								className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="sm:col-span-4">
						<label
							htmlFor="phone"
							className="block text-base font-medium leading-6 text-gray-900"
						>
							Номер телефона
						</label>
						<div className="mt-2">
							<input
								id="phone"
								required
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								name="phone"
								type="text"
								className="pl-3 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						onClick={handleSubmit}
						className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-4 py-2 text-sm font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
					>
						Сделать заказ
					</button>
				</div>
			</form>

			{error && <ErrorModal message={error} onClose={() => setError(null)} />}

			{requestStatus === "success" && (
				<ErrorModal message="Ваш заказ успешно отправлен!" onClose={() => setRequestStatus("")} />
			)}
		</>
	);
};

export default OrderForm;
