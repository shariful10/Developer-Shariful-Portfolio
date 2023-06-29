import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";
const TestimonialSlider = () => {
	const [testimonial, setTestimonial] = useState([]);

	useEffect(() => {
		fetch("testimonial.json")
			.then((res) => res.json())
			.then((data) => setTestimonial(data));
	}, []);

	return (
		<div>
			<Swiper
				pagination={{
					type: "progressbar",
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper">
				<SwiperSlide>
					<div className="grid md:grid-cols-2 gap-6">
						{testimonial.slice(0, 2).map((item) => (
							<TestimonialCard key={item._id} item={item}></TestimonialCard>
						))}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="grid md:grid-cols-2 gap-6">
						{testimonial.slice(2, 4).map((item) => (
							<TestimonialCard key={item._id} item={item}></TestimonialCard>
						))}
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="grid md:grid-cols-2 gap-6">
						{testimonial.slice(4, 6).map((item) => (
							<TestimonialCard key={item._id} item={item}></TestimonialCard>
						))}
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default TestimonialSlider;
