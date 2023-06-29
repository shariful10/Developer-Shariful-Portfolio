import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
	return (
		<section id="testimonial" className="">
			<SectionTitle heading={"Testimonial"} sizing={'1/6'} />
			<TestimonialSlider />
		</section>
	);
};

export default Testimonial;
