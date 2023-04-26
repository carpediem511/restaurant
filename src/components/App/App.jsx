import NavBar from "components/Navbar";
import "./App.css";
import Footer from "components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantPage from "components/Restaurant/restaurantPage";
import HomePage from "components/HomePage";
import { useState, useEffect } from "react";
import { FlapperSpinner } from "react-spinners-kit";
import CartBody from "components/Cart/CartBody";


function App() {
	const [loading, setLoading] = useState(true);
	const [cartOpen, setCartOpen] = useState(false);

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
					<FlapperSpinner size={50} color="#4F46E5" />
				</div>
			) : (
				<BrowserRouter>
					<NavBar setCartOpen={setCartOpen} cartOpen={cartOpen} />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/restaurant/:slug" element={<RestaurantPage />} />
						{cartOpen && <Route path="/cart" element={<CartBody />} />}
					</Routes>

					<Footer />
				</BrowserRouter>
			)}
		</>
	);
}

export default App;
