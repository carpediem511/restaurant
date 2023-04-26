import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Count = ({ dishID, cart, setCart, setShowComponent, selectedDishes, setSelectedDishes }) => {
	const [counter, setCounter] = useState(cart[dishID] || 0);
	const [addedToCart, setAddedToCart] = useState(counter > 0);

	const increase = () => {
		setCounter(counter + 1);
		setAddedToCart(true);
		setCart({ ...cart, [dishID]: counter + 1 });
	};

	const decrease = () => {
		if (counter > 1) {
			setCounter(counter - 1);
			setCart({ ...cart, [dishID]: counter - 1 });
		} else {
			setAddedToCart(false);
			setCart({ ...cart, [dishID]: 0 });
			setShowComponent(false);
			setSelectedDishes(selectedDishes.filter((item) => item !== dishID));
		}
	};

	const closeComponent = () => {
		if (counter > 0) {
			setCounter(0);
			setAddedToCart(false);
			setCart({ ...cart, [dishID]: 0 });
		}
		setShowComponent(false);
	};


	return (

		<div className="flex w-full bg-slate-200 py-2 rounded-xl">
			{addedToCart ? (
				<>
					<button onClick={() => decrease()} className="w-1/4">
						<MinusIcon className="w-6 mx-auto" />
					</button>
					<span className="w-1/4 text-center">{counter}</span>
					<button onClick={() => increase()} className="w-1/4">
						<PlusIcon className="w-6 mx-auto" />
					</button>
					<button onClick={() => closeComponent()} className="w-1/4">
						<TrashIcon className="w-6 mx-auto" />
					</button>
				</>
			) : (
				<button onClick={() => increase()} className="w-full">
					Добавить в корзину
				</button>
			)}
		</div>
	);
};

export default Count;