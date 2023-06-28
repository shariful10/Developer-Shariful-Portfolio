import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<>
			<Link to="/">
				<h2 className="text-4xl font-LobsterTwo font-bold text-navy w-16 h-16 flex justify-center items-center bg-rose-600 rounded-tr-3xl rounded-bl-3xl p-2">
					D<span className="text-primary">S</span>
				</h2>
			</Link>
		</>
	);
};

export default Logo;
