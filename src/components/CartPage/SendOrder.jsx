import { useState } from "react";
import AlertError from "./AlertError";

const SendOrder = ({ requestStatus, customerName, restaurantId }) => {
	const [cartItems, setCartItems] = useState([]);



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
				</>
			)}
			{requestStatus === "error" && <AlertError />}
		</>
	);
};

export default SendOrder