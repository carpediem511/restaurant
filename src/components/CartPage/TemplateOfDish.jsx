import { TrashIcon } from "@heroicons/react/24/outline";

const TemplateOfDish = ({ itemInCart, removeItemFromCart }) => {
	const handleRemoveItem = () => {
		removeItemFromCart(itemInCart.id);
	};

	return (
		<tbody className="text-gray-600 divide-y">
			<tr key={itemInCart.id} >
				<td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
					<img
						src={itemInCart.image}
						className="w-10 h-10 rounded-full"
						alt=""
					/>
					<div>
						<span className="block text-gray-700 text-sm font-medium">
							{itemInCart.name}
						</span>
					</div>
				</td>

				<td className="px-6 py-4 whitespace-nowrap">{itemInCart.quantity}</td>
				<td className="px-6 py-4 whitespace-nowrap">{itemInCart.price}</td>
				<td className="px-6 py-4 whitespace-nowrap">{itemInCart.quantity * itemInCart.price}</td>


				<td className="w-1/6 text-right px-6 whitespace-nowrap">
					<button
						className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
						onClick={handleRemoveItem}
					>
						<TrashIcon />
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default TemplateOfDish;
