import { useState, useEffect } from "react";
import TemplateOfDish from "./TemplateOfDish";
import MakeOrder from "./MakeOrder";

const CartBody = () => {
  /*	получение текущих блюд из localStorage или пустого массива, если данных в localStorage нет*/
  const currentDishes = JSON.parse(localStorage.getItem("cart")) || [];
  /*состояние корзины. по умолчанию - массив, полученный из localStorage и отфильтрованный*/
  const [cart, setCart] = useState(
    currentDishes.filter((d) => d.isAdded) || []
  );

  /*	общая стоимость и количество блюд в корзине*/
  const [total, setTotal] = useState({
    cost:
      cart.length > 0
        ? cart.reduce((previous, current) => previous + current.costTotal, 0)
        : 0,
    count:
      cart.length > 0
        ? cart.reduce((previous, current) => previous + current.count, 0)
        : 0,
  });

  /*	обновление общей стоимости и количества блюд в корзине при изменении корзины*/
  useEffect(() => {
    setTotal({
      cost:
        cart.length > 0
          ? cart.reduce((previous, current) => previous + current.costTotal, 0)
          : 0,
      count:
        cart.length > 0
          ? cart.reduce((previous, current) => previous + current.count, 0)
          : 0,
    });
  }, [cart]);

  /* удаление из корзины по id*/
  const removeItemFromCart = (id) => {
    setCart((cart) => cart.filter((itemInCart) => id !== itemInCart.id));
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
                <th className="py-3 px-6">Наименование блюда</th>
                <th className="py-3 px-6">Количество</th>
                <th className="py-3 px-6">Цена за блюдо</th>
                <th className="py-3 px-6">Общая стоимость блюд</th>
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
              <td></td>
              <td></td>
              <td>{total.cost}</td>
              <td></td>
            </tr>
          </table>
        </div>

        <MakeOrder />
      </div>
    </>
  );
};

export default CartBody;
