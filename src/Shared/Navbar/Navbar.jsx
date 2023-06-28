import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<>
			<div className="bg-primary sticky top-0 z-50">
				<Container>
					<div className="p-2 flex justify-between items-center">
						<Logo />
						<NavItem />
					</div>
				</Container>
			</div>
			<SocialIcons />
		</>
	);
};

export default Navbar;
