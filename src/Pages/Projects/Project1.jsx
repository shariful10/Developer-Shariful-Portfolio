import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project1 = () => {
	return (
		<div className="grid md:grid-cols-2 justify-center items-center gap-10 mt-[50px]">
			<div className="box w-[340px] h-[250px] md:w-[580px] md:h-[400px] bg-black bg-project1 bg-top hover:bg-bottom bg-cover rounded-lg"></div>
			<div>
				<h3 className="text-3xl font-Roboto font-semibold">Job Hunting</h3>
				<p className="my-5 w-full">
					A job hunting website is an online platform that connects job seekers with
					employers by providing job listings, resume submission, and various resources to
					support the job search process. Users can search and filter job listings, create
					profiles, upload resumes, and receive job alerts. These websites serve as a
					central hub for finding and applying for job opportunities, as well as accessing
					career-related resources and tracking application progress.
				</p>
				<div className="flex items-center gap-4">
					<Link
						to="https://hunting-job.netlify.app/"
						className="myBtn flex items-center gap-2">
						<BiWorld className="h-6 w-6" />
						<span className="hidden md:block">Live Demo</span>
					</Link>
					<Link
						to="https://github.com/shariful10/career-hub"
						className="myBtn flex items-center gap-2">
						<FaGithub className="h-6 w-6" />
						<span className="hidden md:block">GitHub</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Project1;
