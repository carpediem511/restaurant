import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";


const Count = ({ dishID, cart, setCart, setShowComponent, }) => {


	const increase = () => {

		const item = cart.find(i => i.id === dishID)

		const arr = cart.filter((orderItem) => {

			return orderItem.id !== dishID //получаем все товары кроме нашего
		})

		setCart([...arr, { ...item, quantity: item.quantity + 1 }]);



	};

	const decrease = () => {
		const item = cart.find((i) => i.id === dishID);
		// Проверяем, чтобы количество товара было больше 1 перед уменьшением
		if (item.quantity > 1) {
			const arr = cart.filter((orderItem) => {
				return orderItem.id !== dishID;
			});

			setCart([...arr, { ...item, quantity: item.quantity - 1 }]);
		};
	}
	const closeComponent = () => {
		setShowComponent(false);
	};

	return (
		<div className="flex w-full bg-slate-200 py-2 rounded-xl">


			<button onClick={decrease} className="w-1/4">
				<MinusIcon className="w-6 mx-auto" />
			</button>
			<span className="w-1/4 text-center">{cart.find(i => i.id === dishID).quantity}</span>
			<button onClick={increase} className="w-1/4">
				<PlusIcon className="w-6 mx-auto" />
			</button>
			<button onClick={closeComponent} className="w-1/4">
				<TrashIcon className="w-6 mx-auto" />
			</button>


		</div>
	);
};


export default Count;
