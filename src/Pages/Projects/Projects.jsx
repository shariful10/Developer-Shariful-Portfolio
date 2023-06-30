import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Project3 from "./Project3";
import Project2 from "./Project2";
import Project1 from "./Project1";

const Projects = () => {
	return (
		<>
			<section className="my-[50px]">
				<SectionTitle heading={"My Projects"} scale="1/6" />
				<Project1 />
				<Project2 />
				<Project3 />
			</section>
			<p id="testimonial" className="text-transparent mb-[80px]">
				hidden
			</p>
		</>
	);
};

export default Projects;
