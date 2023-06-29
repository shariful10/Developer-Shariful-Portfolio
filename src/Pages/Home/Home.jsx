import React from "react";
import Banner from "../Banner/Banner";
import Skills from "./../Skills/Skills";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Container from "../../Shared/Container/Container";

const Home = () => {
	return (
		<div>
			<Container>
				<Banner />
				<Skills />
				<Projects />
				<Testimonial />
				<Contact />
			</Container>
		</div>
	);
};

export default Home;
