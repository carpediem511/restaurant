import { useState } from "react";
import AlertError from "./AlertError";

const Successful = ({ customerName }) => {
  const [cartItems, setCartItems] = useState([]);
  const [requestStatus, setRequestStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      customerName: customerName,
      phone: phone,
      email: email,
      restaurantId: restaurantId,
      cartItems: cartItems,
    };

    fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants/order", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setRequestStatus("success");
        setCartItems([]);
      })
      .catch((error) => {
        setRequestStatus("error");
      });
  };
  return (
    <>
      {requestStatus === "success" ? (
        <>
          <h2>Ваш заказ успешно оформлен!</h2>
          <p>Здравствуйте, {customerName}!</p>
          <p>Состав вашего заказа:</p>
          <ul>
            {cartItems.map((item) => (
              <div key={item.id}>
                {item.name} - {item.quantity} шт.
              </div>
            ))}
          </ul>
        </>
      ) : (
        <AlertError />
      )}
    </>
  );
};

export default Successful;
