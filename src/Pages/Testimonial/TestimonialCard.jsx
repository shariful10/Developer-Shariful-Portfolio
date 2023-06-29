import React from "react";

const TestimonialCard = ({item}) => {
	console.log(item);

	return (
		<div className="bg-navy px-4 py-8 md:p-10 rounded-lg mt-10 text-center">
			<img className="w-[80px] h-[80px] mx-auto rounded-full" src={item.img} alt="" />
			<h2 className="text-xl font-medium font-Roboto mt-5 mb-8">{item.name}</h2>
            <img className="mx-auto w-[50px] md:w-[100px]" src="https://i.ibb.co/k1tYcPP/icons8-quote-left-100.png" alt="" />
			<p>{item.desc}</p>
		</div>
	);
};

export default TestimonialCard;
