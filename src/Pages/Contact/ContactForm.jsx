import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_exwkr9d", "template_zwo79v9", form.current, "Rv3tHq_N7xr0GGL2x")
			.then(
				(result) => {
					form.current.reset();
					console.log(result.text);
					Swal.fire({
						position: "center",
						icon: "success",
						title: "You Message Sent Successfully",
						showConfirmButton: false,
						timer: 1500,
					});
				},
				(error) => {
					console.log(error.text);
					Swal.fire({
						position: "center",
						icon: "error",
						title: "Something Went Wrong",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8 mt-[50px] md:mt-0">
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
			{/* <button className="btnSubmit" type="submit">
				
			</button> */}
			<input className="btnSubmit" type="submit" value="Send Message" />
		</form>
	);
};

export default ContactForm;
