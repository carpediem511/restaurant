import { useState } from "react";
import Successful from "./Successful";
import AlertError from "./AlertError";
import { Link } from "react-router-dom";

const OrderForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [restaurantId, setRestaurantId] = useState("");

  return (
    <>
      <form
        /*onSubmit={handleSubmit} */ action="/cart/orderIsProcessed"
        className="w-1/4 mx-auto pt-36"
      >
        <h2 className="text-center text-xl mb-6 text-teal-500">
          Введите ваши данные для оформления заказа:
        </h2>

        <div className="mb-10">
          <div className="col-span-full">
            <button
              className="block text-xl font-medium leading-6 mb-10 text-teal-700"
              id="restaurantId"
              value={restaurantId.name}
              onChange={(e) => setRestaurantId(e.target.value)}
            >
              Заказ из ресторана
            </button>
          </div>
          <div className="sm:col-span-3">
            <label
              for="name"
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
              for="phone"
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

        <Link
          to="/order/completed"
          customerName={customerName}
          className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-800"
        >
          Сделать заказ
        </Link>
      </form>
    </>
  );
};

export default OrderForm;
