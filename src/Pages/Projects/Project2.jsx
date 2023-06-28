import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project2 = () => {
	return (
		<div className="grid md:grid-cols-2 justify-center items-center gap-10 my-[50px]">
			<div className="order-2 md:order-1">
				<h3 className="text-3xl font-Roboto font-semibold">Justice Solutions</h3>
				<p className="my-5 w-full">
					Justice Solutions is a comprehensive website offering a wide range of resources
					and services related to the field of justice and law. It provides legal
					information, professional services, and valuable tools to individuals,
					organizations, and professionals in the justice system. The website serves as a
					hub for accessing legal knowledge, connecting with legal experts, and finding
					solutions to various justice-related needs.
				</p>
				<div className="flex items-center gap-4">
					<Link
						to="https://justice-legalsolutions.netlify.app/"
						className="myBtn flex items-center gap-2">
						<BiWorld className="h-6 w-6" />
						<span className="hidden md:block">Live Demo</span>
					</Link>
					<Link
						to="https://github.com/shariful10/Justice-Solution"
						className="myBtn flex items-center gap-2">
						<FaGithub className="h-6 w-6" />
						<span className="hidden md:block">GitHub</span>
					</Link>
				</div>
			</div>
			<div className="box order-1 md:order-2 w-[340px] h-[250px] md:w-[580px] md:h-[400px] bg-black bg-project2 bg-top hover:bg-bottom bg-cover rounded-lg"></div>
		</div>
	);
};

export default Project2;
