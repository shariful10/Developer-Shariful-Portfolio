import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import Project3 from "./Project3";
import Project2 from "./Project2";
import Project1 from "./Project1";

const Projects = () => {
	return (
		<section id="projects" className="my-[50px]">
			<SectionTitle heading={"My Projects"} scale="1/6" />
			<Project1 />
			<Project2 />
			<Project3 />
		</section>
	);
};

export default Projects;
