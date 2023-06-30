import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SocialContact from "./SocialContact";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section className="">
			<SectionTitle heading={"Contact Me"} />
			<div className="grid md:grid-cols-2 justify-center gap-6 my-[50px]">
				<SocialContact />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
