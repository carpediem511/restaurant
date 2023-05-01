import { useState } from "react";

const MakeOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [restaurantId, setRestaurantId] = useState("");
  const [cartItems, setCartItems] = useState([]);

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
        alert("Ваш заказ успешно оформлен!");
      })
      .catch((error) => {
        alert("Произошла ошибка при оформлении заказа.");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-xl font-medium leading-6 text-gray-900"
          >
            Ваша фамилия и имя
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-xlfont-medium leading-6 text-gray-900"
          >
            Ващ адрес электронной почты
          </label>
          <div className="mt-2">
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              autoComplete="email"
              className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="phone"
            className="block text-xl font-medium leading-6 text-gray-900"
          >
            Ваш номер телефона
          </label>
          <div className="mt-2">
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              type="text"
              autoComplete="phone"
              className="pl-3 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-xl font-medium leading-6 text-gray-900"
          >
            Заказ из ресторана
          </label>
          <div className="mt-2">
            <input
              type="text"
              value={restaurantId}
              onChange={(e) => setRestaurantId(e.target.value)}
              className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button type="submit">Оформить заказ</button>
      </form>
    </>
  );
};

export default MakeOrder;
