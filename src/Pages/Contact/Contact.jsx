import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SocialContact from "./SocialContact";

const Contact = () => {
	return (
		<section className="">
			<SectionTitle heading={"Contact Me"} />
			<div className="grid md:grid-cols-2 justify-center gap-6 my-[50px]">
				<SocialContact />
				<form className="flex flex-col gap-8">
					<input
						className="rounded-lg p-4 bg-transparent border-2 border-primary font-Roboto"
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						className="rounded-lg p-4 bg-transparent border-2 border-primary font-Roboto"
						type="email"
						name="email"
						placeholder="Your Email"
						required
					/>
					<textarea
						className="rounded-lg p-4 bg-transparent border-2 border-primary resize-none font-Roboto"
						name="message"
						rows="7"
						placeholder="Your Mesage"
						required></textarea>
					<button className="btnSubmit" type="submit">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
