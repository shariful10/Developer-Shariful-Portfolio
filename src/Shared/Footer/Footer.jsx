import React from "react";
import FooterIcon from "./FooterIcon";
import FooterMenu from "./FooterMenu";
import Container from "../Container/Container";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="bg-primary pb-5 pt-10">
			<Container>
				<div className="flex flex-col justify-center">
					<FooterIcon />
					<FooterMenu />
				</div>
				<div className="mt-5">
					<hr />
				</div>
				<p className="text-center font-Roboto text-sm font-normal mt-5">
					© {currentYear} Developer Shariful. All rights reserved.
				</p>
			</Container>
		</div>
	);
};

export default Footer;
