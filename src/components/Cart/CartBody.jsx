import { useState } from "react"


const CartBody = () => {

	const [items, setItems] = useState([])

	return (

		<>
			<div className="max-w-screen-xl mx-auto px-4 md:px-8">
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


							</tr>
						</thead>
						<tbody className="text-gray-600 divide-y">
							{
								items.map((item, idx) => (
									<tr key={idx}>
										<td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
											<img src={item.avatar} className="w-10 h-10 rounded-full" />
											<div>
												<span className="block text-gray-700 text-sm font-medium">{item.name}</span>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
										<td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
										<td className="text-right px-6 whitespace-nowrap">
											<a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
												Добавить
											</a>
											<button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
												Удалить
											</button>
										</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>


		</>
	)
}

export default CartBody