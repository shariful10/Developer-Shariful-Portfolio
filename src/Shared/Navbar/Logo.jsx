import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/newlogo.json";
import Lottie from "lottie-react";

const Logo = () => {
	return (
		<>
			<a href="#home">
				{/* <h2 className="text-4xl font-LobsterTwo font-bold text-navy w-16 h-16 flex justify-center items-center bg-rose-600 rounded-tr-3xl rounded-bl-3xl p-2">
					D<span className="text-primary">S</span>
				</h2> */}
				<Lottie className="w-20 h-20" animationData={logo} loop={true} />
			</a>
		</>
	);
};

export default Logo;
