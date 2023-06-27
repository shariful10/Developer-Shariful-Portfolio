import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import Container from "../Container/Container";
import { Link } from "react-scroll";
import { navLinkData } from "../../Components/navLinkData";

const Navbar = () => {
	return (
		<>
			<div className="bg-cyan-400 sticky top-0 z-20 scroll-smooth">
				<Container>
					<div className="p-2 flex justify-between items-center">
						<Link to="/">
							<h2 className="text-4xl font-LobsterTwo font-bold text-navy w-16 h-16 flex justify-center items-center bg-rose-600 rounded-tr-3xl rounded-bl-3xl p-2">
								D<span className="text-primary">S</span>
							</h2>
						</Link>
						<div className="">
							<ul className="flex items-center gap-10 text-white">
								{navLinkData.map(({ _id, title, link }) => (
									<li
										className="text-base font-medium font-Roboto tracking-wide cursor-pointer hover:text-rose-600 duration-300"
										key={_id}>
										<Link
											activeClass="active"
											to={link}
											spy={true}
											smooth={true}
											offset={-70}
											duration={300}>
											{title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</div>
			<SocialIcons />
		</>
	);
};

export default Navbar;
