import { useState } from "react";
import AlertError from "./OrderError";
import OrderError from "./OrderError";
import ErrorModal from "components/HomePage/ErrorModal";

const SendOrder = ({ requestStatus, customerName, restaurantId, cartItems, handleSubmit }) => {

	return (
		<>
			{requestStatus === "success" && (
				<><p>Здравствуйте, {customerName}!</p>
					<h2>Ваш заказ из ресторана {restaurantId} успешно оформлен!</h2>
					<p>Мы свяжемся с вами в ближайшее время!</p>
					<p>Состав вашего заказа:</p>
					<ul>
						{cartItems.map((item) => (
							<div key={item.id}>
								<p>{item.name}</p>
								<p>{item.quantity}</p>
								<p>{item.price}</p>

							</div>
						))}
					</ul>
					<button
						type="button"
						onClick={handleSubmit}
						className="inline-flex justify-center rounded-md border border-transparent bg-teal-100 px-4 py-2 text-sm font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
					>
						Отправить
					</button>
				</>
			)}
			{requestStatus === "error" && <ErrorModal message="Ошибка при отправке заказа. Пожалуйста, попробуйте еще раз." />}
		</>
	);
};

export default SendOrder