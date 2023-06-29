import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project3 = () => {
	return (
		<div className="grid md:grid-cols-2 justify-center items-center gap-10">
			<div className="box w-[340px] h-[250px] md:w-[580px] md:h-[400px] bg-black bg-project3 bg-top hover:bg-bottom bg-cover rounded-lg"></div>
			<div>
				<h3 className="text-3xl font-Roboto font-semibold">Sports Gear</h3>
				<p className="my-5 w-full">
					Sports Gear is a dedicated website for cricket enthusiasts, offering a wide
					range of cricket equipment, gear, and training resources. With a focus on
					cricket training, the website provides comprehensive tools and knowledge to
					enhance players' skills and performance on the field. Whether you're a beginner or an experienced player, Sports Gear is your go-to destination for all your cricket training needs.
				</p>
				<div className="flex items-center gap-4">
					<Link
						to="https://sports-gear-client.web.app/"
						className="myBtn flex items-center gap-2">
						<BiWorld className="h-6 w-6" />
						<span className="hidden md:block">Live Demo</span>
					</Link>
					<Link
						to="https://github.com/shariful10/Sports-Gear"
						className="myBtn flex items-center gap-2">
						<FaGithub className="h-6 w-6" />
						<span className="hidden md:block">GitHub</span> Client
					</Link>
					<Link
						to="https://github.com/shariful10/Sports-Gear-Server"
						className="myBtn flex items-center gap-2">
						<FaGithub className="h-6 w-6" />
						<span className="hidden md:block">GitHub</span> Server
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Project3;
