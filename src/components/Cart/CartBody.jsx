import { TrashIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react"


const CartBody = () => {

	const [items, setItems] = useState([])
	const savedCart = localStorage.getItem("cart");

	useEffect(() => {
		if (savedCart) {
			setItems(JSON.parse(savedCart));
		}
	}, [savedCart]);

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
								<th className="py-3 px-6">  </th>



							</tr>
						</thead>
						<tbody className="text-gray-600 divide-y">
							{

								items.length === 0 ? (
									<p>Ваша корзина пуста.</p>
								) : (
									items.map((item, idx) => (
										<tr key={idx}>
											<td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
												<img src={item.image} className="w-10 h-10 rounded-full" alt="" />
												<div>
													<span className="block text-gray-700 text-sm font-medium">{item.name}</span>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
											<td className="px-6 py-4 whitespace-nowrap"></td>
											<td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
											<td className="px-6 py-4 whitespace-nowrap"></td>
											<td className="text-right px-6 whitespace-nowrap">

												<button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
													<TrashIcon />
												</button>
											</td>
										</tr>
									)))
							}
						</tbody>
					</table>
				</div>
			</div>


		</>
	)
}

export default CartBody