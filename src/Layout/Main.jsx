import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Container from "../Shared/Container/Container";

const Main = () => {
	return (
		<div className="bg-darkblue text-white bg-bodyBg">
			<Navbar />
			<div className="min-h-[calc(100vh-249px)]">
				<Container>
					<Outlet />
				</Container>
			</div>
			<Footer />
		</div>
	);
};

export default Main;
