import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsLinkedin } from "react-icons/bs";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import Container from "../Container/Container";

const SocialIcons = () => {
	return (
		<Container>
			<div className="flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-rose-600">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="/">
							Resume <BsFillPersonLinesFill size={24} />
						</a>
					</li>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-black">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="/">
							GitHub <FaGithub size={24} />
						</a>
					</li>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="/">
							LinkedIn <BsLinkedin size={24} />
						</a>
					</li>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-[#b269f6]">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="/">
							Dribbble <TbBrandDribbbleFilled size={24} />
						</a>
					</li>
				</ul>
			</div>
		</Container>
	);
};

export default SocialIcons;
