import React, { useState } from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="bg-primary sticky top-0 z-50">
				<Container>
					<div className="p-1 flex justify-between items-center">
						<Logo />
						<div className="hidden md:block">
							<NavItem />
						</div>
						<div
							onClick={() => setIsOpen(!isOpen)}
							className="p-4 md:p-1 border-[2px] border-rose-600 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition md:hidden">
							{isOpen ? (
								<HiOutlineX className="h-6 w-6 text-rose-600" />
							) : (
								<AiOutlineMenu className="h-6 w-6 text-rose-600" />
							)}
						</div>
					</div>
					{isOpen && (
						<div className="absolute rounded-b-lg shadow-md w-[40vw] md:w-3/4 bg-primary overflow-hidden right-0 md:top-12 text-sm block md:hidden py-4">
							<div className="flex flex-col cursor-pointer list-none">
								<li className="py-2">
									<a
										onClick={() => setIsOpen(false)}
										href="#home"
										className="px-4 py-3 hover:text-rose-500 hover:bg-neutral-100 transition font-semibold text-[16px]">
										Home
									</a>
								</li>
								<li className="py-2">
									<a
										onClick={() => setIsOpen(false)}
										href="#skills"
										className="px-4 py-3 hover:text-rose-500 hover:bg-neutral-100 transition font-semibold text-[16px]">
										Skills
									</a>
								</li>
								<li className="py-2">
									<a
										onClick={() => setIsOpen(false)}
										href="#projects"
										className="px-4 py-3 hover:text-rose-500 hover:bg-neutral-100 transition font-semibold text-[16px]">
										Projects
									</a>
								</li>
								<li className="py-2">
									<a
										onClick={() => setIsOpen(false)}
										href="#testimonial"
										className="px-4 py-3 hover:text-rose-500 hover:bg-neutral-100 transition font-semibold text-[16px]">
										Testimonials
									</a>
								</li>
								<li className="py-2">
									<a
										onClick={() => setIsOpen(false)}
										href="#contact"
										className="px-4 py-3 hover:text-rose-500 hover:bg-neutral-100 transition font-semibold text-[16px]">
										Contact
									</a>
								</li>
							</div>
						</div>
					)}
				</Container>
			</div>
			<SocialIcons />
		</>
	);
};

export default Navbar;
