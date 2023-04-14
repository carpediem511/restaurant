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
			<h2>О нас говорят!</h2>

			<div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
				<div>
					<img
						src={`./images/${reviews[currentReview]?.avatar}`}
						className="w-6 h-6 rounded-md mt-5 mx-1.5"
						alt=""
					/>
					<p>{reviews[currentReview]?.date}</p>
					<h3>{reviews[currentReview]?.name}</h3>
					<p>{reviews[currentReview]?.text}</p>
				</div>
				<div className="flex items-center justify-between text-sm text-gray-600 font-medium">
					<button
						className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
						disabled={currentReview === 0}
						onClick={handlePrevClick}
					>
						Предыдущий
					</button>
					<div>
						Отзыв {currentReview + 1} из {reviews.length}
					</div>
					<button
						className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
						disabled={currentReview === reviews.length - 1}
						onClick={handleNextClick}
					>
						Следующий
					</button>
				</div>
			</div>
		</>
	)
}

export default Reviews