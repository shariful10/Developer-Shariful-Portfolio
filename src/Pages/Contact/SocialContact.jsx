import React from "react";
import { contactData } from "./contactData";

const SocialContact = () => {
	return (
		<div className="grid md:grid-cols-2 gap-8">
			{contactData.map(({ _id, name, email, img, msg, link }) => (
				<article
					key={_id}
					className="bg-navy transition duration-300 hover:bg-rose-600 flex items-center gap-6 p-5 rounded-lg py-auto">
					<img className="h-[80px] w-[80px]" src={img} alt="" />
					<div className="">
						<h4 className="md:text-2xl font-Roboto font-medium">{name}</h4>
						<h5 className="font-Roboto">{email}</h5>
						<a className="font-Roboto" href={link} target="_blank">
							{msg}
						</a>
					</div>
				</article>
			))}
		</div>
	);
};

export default SocialContact;
