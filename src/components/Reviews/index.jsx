import { useState, useEffect } from "react";


const Reviews = () => {

	const [reviews, setReviews] = useState([]);
	const [currentReview, setCurrentReview] = useState(0);

	useEffect(() => {
		fetch(`https://642ee23f2b883abc64198889.mockapi.io/restaurant`)
			.then((response) => response.json())
			.then((data) => setReviews(data))
			.catch((error) => console.log(error));
	}, []);

	const handlePrevClick = () => {
		if (currentReview > 0) {
			setCurrentReview(currentReview - 1);
		}
	};

	const handleNextClick = () => {
		if (currentReview < reviews.length - 1) {
			setCurrentReview(currentReview + 1);
		}
	};


	return (
		<>
			<h2 id="reviews" className='text-center mt-16 text-5xl text-teal-500 font-["Neucha"]'>
				О нас говорят!
			</h2>
			<div className="flex items-center">
				<button
					className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
					/*не получилось отредактировать, чтобы не прыгали кнопки*/
					disabled={currentReview === 0}
					onClick={handlePrevClick}
				>
					Предыдущий
				</button>
				<div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
					<div className="w-3/4 mx-auto border-2 rounded-xl shadow-slate-300/50 shadow-md">
						<img
							src={`./images/${reviews[currentReview]?.avatar}`}
							className="w-48 rounded-2xl mt-8 mx-auto"
							alt=""
						/>
						<p className="text-center mt-5 text-lg">
							{reviews[currentReview]?.date}
						</p> {/*не получилось отформатировать дату*/}
						<h3 className="text-2xl text-end pr-10 text-slate-800 font-medium">
							{reviews[currentReview]?.name}
						</h3>
						<div className="flex mt-4">
							<img src="./images/quote.png" className="w-12 h-8 pl-4" />
							<p className="text-xl pb-8 px-6">
								{reviews[currentReview]?.text}
							</p>
						</div>
					</div>

				</div>
				<button
					className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
					disabled={currentReview === reviews.length - 1}
					onClick={handleNextClick}
				>
					Следующий
				</button>
			</div>

			<div className="border-b border-gray-900/10 pb-12"></div>
		</>
	)
}

export default Reviews