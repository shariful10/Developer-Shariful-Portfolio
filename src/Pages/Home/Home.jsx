import React from "react";
import Banner from "../Banner/Banner";
import Skills from "./../Skills/Skills";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Container from "../../Shared/Container/Container";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
	return (
		<div>
			<Banner />
			<AboutMe />
			<Skills />
			<Projects />
			<Testimonial />
			<Contact />
		</div>
	);
};

export default Home;
