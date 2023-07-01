import React from "react";
import { frontendData } from "./frontend";

const FrontEndCard = () => {
	return (
		<div
			data-aos="fade-right"
			className="bg-navy transition duration-300 hover:bg-dribble py-[2.4rem] px-[14px] md:px-[4rem] rounded-lg">
			<h3 className="text-primary font-Roboto text-center mb-8 text-3xl font-medium">
				Frontend Development
			</h3>
			<div className="grid grid-cols-2 gap-6">
				{frontendData.map(({ _id, img, title, experience }) => (
					<article key={_id} className="">
						<div className="flex justify-center items-center">
							<img className="h-[50px]" src={img} alt="" />
							<div className="ml-3">
								<h4 className="font-Roboto font-medium">{title}</h4>
								<small className="text-gray-400">{experience}</small>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default FrontEndCard;
