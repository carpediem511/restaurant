import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FlapperSpinner } from "react-spinners-kit";

const MenuOfRestaurant = () => {
	const { slug } = useParams();

	const [setRestaurant] = useState({});
	const [dishes, setDishes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
			.then((response) => response.json())
			.then(
				(result) => {
					setRestaurant(result);
				},
				(error) => {
					console.log(error);
				}
			);
	}, [slug]);

	useEffect(() => {
		setLoading(true);
		fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
			.then((response) => response.json())
			.then(
				(result) => {
					setDishes(result);
					setLoading(false);
				},
				(error) => {
					console.log(error);
					setLoading(false);
				}
			);
	}, [slug]);

	return (
		<>
			<> {/*ПОЧЕМУ-ТО СТРАНИЦА ПОКАЗЫВАЕТСЯ С КОНЦА*/}
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
					{loading ? (
						<div className="flex justify-center items-center h-screen">
							<FlapperSpinner size={50} color="#4F46E5" />
						</div>
					) : (
						<div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
							{dishes.map((dish) => (
								<div
									key={dish.id}
									className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
								>
									<div className="relative w-full h-48">
										<img
											src={dish.image}
											className="object-cover w-full h-full rounded-t"
											alt=""
										/>
									</div>
									<div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
										<div className="grid auto-cols-auto flex-grow">
											<div className="flex flex-col">
												<div className="text-2xl font-semibold">{dish.name}</div>
												<div className="text-sm text-gray-900 flex-grow">
													{dish.description}
												</div>
												<div className="mt-1 mb-4 mr-1 text-lg font-bold sm:text-5xl">
													{dish.price} Lira
												</div>
											</div>
										</div>
										<button className="w-full justify-center flex mx-auto px-2.5 py-2.5 text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="w-5 h-5 pt-1"
											>
												<path
													fillRule="evenodd"
													d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
													clipRule="evenodd"
												/>
											</svg>
											<p className="font-semibold">Добавить</p>
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</>

		</>
	)
}

export default MenuOfRestaurant