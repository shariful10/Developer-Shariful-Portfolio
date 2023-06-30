import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import FrontEndCard from "./FrontEndCard";
import BackEndCard from "./BackEndCard";

const Skills = () => {
	return (
		<>
			<section className="my-[50px]">
				<SectionTitle heading={"My Skills"} />
				<div className="grid md:grid-cols-2 gap-8 my-[50px]">
					<FrontEndCard />
					<BackEndCard />
				</div>
			</section>
			<p id="projects" className="text-transparent mb-[80px]">
				hidden
			</p>
		</>
	);
};

export default Skills;
