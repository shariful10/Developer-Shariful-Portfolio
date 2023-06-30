import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
	return (
		<>
			<section id="" className="">
				<SectionTitle heading={"Testimonial"} sizing={"1/6"} />
				<TestimonialSlider />
			</section>
			<p id="contact" className="text-transparent mb-[80px]">
				hidden
			</p>
		</>
	);
};

export default Testimonial;
