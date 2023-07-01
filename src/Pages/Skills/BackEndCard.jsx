import React from "react";
import { backendData } from "./backend";

const BackEndCard = () => {
	return (
		<div
			data-aos="fade-left"
			className="bg-navy transition duration-300 hover:bg-dribble py-[2.4rem] px-[14px] md:px-[5rem] rounded-lg">
			<h3 className="text-primary font-Roboto text-center mb-8 text-3xl font-medium">
				Backend Development
			</h3>
			<div className="grid grid-cols-2 gap-6">
				{backendData.map(({ _id, img, title, experience }) => (
					<article key={_id}>
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

export default BackEndCard;
