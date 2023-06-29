import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project2 = () => {
	return (
		<div className="grid md:grid-cols-2 justify-center items-center gap-10 my-[50px]">
			<div className="order-2 md:order-1">
				<h3 className="text-3xl font-Roboto font-semibold">Bistro Boss Restaurant</h3>
				<p className="my-5 w-full">
					Bistro Boss Restaurant's website is a captivating portal to a world of culinary excellence. With its visually stunning design and intuitive layout, the site offers a seamless browsing experience for visitors. Discover the restaurant's commitment to using fresh, locally sourced ingredients and be tempted by their mouthwatering menu. Whether you're 
					a food enthusiast or simply looking for a memorable dining experience, Bistro Boss Restaurant's website is your gateway to a world of 
					delectable delights.
				</p>
				<div className="flex items-center gap-4">
					<Link
						to="https://recap-bistro-boss-restaurant.web.app/"
						className="myBtn flex items-center gap-2">
						<BiWorld className="h-6 w-6" />
						<span className="hidden md:block">Live Demo</span>
					</Link>
					<Link
						to="https://github.com/shariful10/bistro-boss-client"
						className="myBtn flex items-center gap-2">
						<FaGithub className="h-6 w-6" />
						<span className="hidden md:block">GitHub</span> Client
					</Link>
					<Link
						to="https://github.com/shariful10/bistro-boss-server"
						className="myBtn flex items-center gap-2">
						<FaGithub className="h-6 w-6" />
						<span className="hidden md:block">GitHub</span> Server
					</Link>
				</div>
			</div>
			<div className="box order-1 md:order-2 w-[340px] h-[250px] md:w-[580px] md:h-[400px] bg-black bg-project2 bg-top hover:bg-bottom bg-cover rounded-lg"></div>
		</div>
	);
};

export default Project2;
