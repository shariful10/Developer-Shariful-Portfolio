import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { navLinkData } from "../../Components/navLinkData";

const Navbar = () => {
	return (
		<div className="bg-cyan-400">
			<Container>
				<div className="p-2 flex justify-between items-center">
					<Link to="/">
						<h2 className="text-4xl font-LobsterTwo font-bold text-navy w-16 h-16 flex justify-center items-center bg-dribble rounded-tr-3xl rounded-bl-3xl p-2">
							D<span className="text-primary">S</span>
						</h2>
					</Link>
					<div className="">
						<ul className="flex items-center gap-10 text-white">
							{navLinkData.map(({ _id, title, link }) => (
								<li
									className="text-base font-medium font-Roboto tracking-wide cursor-pointer hover:text-dribble duration-300"
									key={_id}>
									{title}
								</li>
							))}
						</ul>
					</div>
				</div>
				<SocialIcons />
			</Container>
		</div>
	);
};

export default Navbar;
