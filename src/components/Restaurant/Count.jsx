import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Count = ({ dishID }) => {

	const [counter, setCounter] = useState(0)

	const increase = () => {

		setCounter(counter + 1)
	}

	const decrease = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};



	return (

		<>
			<div className="flex">
				<button onClick={() => { decrease(dishID) }} className="border w-6" ><MinusIcon /></button>
				<span>{counter}</span>
				<button onClick={() => { increase(dishID) }} className="border w-6" ><PlusIcon /></button>
			</div>
		</>
	)
}

export default Count