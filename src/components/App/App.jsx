import NavBar from "components/Navbar";
import "./App.css";
import Footer from "components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantPage from "components/RestaurantPage";
import HomePage from "components/HomePage";
import { useState, useEffect } from "react";
import { FlapperSpinner } from "react-spinners-kit";
import CartBody from "components/CartPage";
import SendOrder from "components/CartPage/SendOrder";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading ? (
				<div className="flex justify-center items-center h-screen">
					<FlapperSpinner size={50} color="#00CED1" />
				</div>
			) : (
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/restaurant/:slug" element={<RestaurantPage />} />
						<Route path="/cart" element={<CartBody />} />
						<Route path="/cart/order" element={<SendOrder />} />
					</Routes>

					<Footer />
				</BrowserRouter>
			)}
		</>
	);
}

export default App;
