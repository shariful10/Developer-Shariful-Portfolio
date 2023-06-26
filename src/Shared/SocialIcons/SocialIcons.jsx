import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { BsFillPersonLinesFill, BsLinkedin } from "react-icons/bs";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import Container from "../Container/Container";

const SocialIcons = () => {
	return (
		<Container>
			<div className="flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-red-600 rounded-tr-md">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="https://drive.google.com/file/d/1xAeBuYsELJaZ9uG7RdptiM-3v0n1spB4/view?usp=sharing"
							target="_blank">
							Resume <BsFillPersonLinesFill size={24} />
						</a>
					</li>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-black">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="https://github.com/shariful10"
							target="_blank">
							GitHub <FaGithub size={24} />
						</a>
					</li>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="https://www.linkedin.com/in/md-shariful-islam-3132721b8/"
							target="_blank">
							LinkedIn <BsLinkedin size={24} />
						</a>
					</li>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-[#ea4c89]">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="https://dribbble.com/shariful102"
							target="_blank">
							Dribbble <TbBrandDribbbleFilled size={24} />
						</a>
					</li>
					<li className="text-white w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 bg-blue-600 rounded-br-md">
						<a
							className="flex justify-between items-center w-full text-white px-5"
							href="https://www.facebook.com/skshariful.islam.18"
							target="_blank">
							Facebook <FaFacebook size={24} />
						</a>
					</li>
				</ul>
			</div>
		</Container>
	);
};

export default SocialIcons;
