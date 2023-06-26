import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
	return (
		<div>
			<Navbar />
			<div className="min-h-[calc(100vh-48px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
