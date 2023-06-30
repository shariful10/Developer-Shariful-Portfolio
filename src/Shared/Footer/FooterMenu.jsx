import React from "react";
import { navLinkData } from "../../Components/navLinkData";

const FooterMenu = () => {
	return (
		<ul className="inline-flex justify-center items-center gap-2 md:gap-10 mx-auto">
			{navLinkData.map(({ _id, title, link }) => (
				<li
					className="text-base font-medium font-Roboto tracking-wide cursor-pointer hover:text-rose-600 duration-300 list-none mt-5"
					key={_id}>
					<a href={`#${link}`} className="duration-500 list-none">
						{title}
					</a>
				</li>
			))}
		</ul>
	);
};

export default FooterMenu;
