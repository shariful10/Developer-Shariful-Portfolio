import React from "react";
import { navLinkData } from "../../Components/navLinkData";

const NavItem = () => {
	return (
		<div>
			<ul className="inline-flex items-center gap-10 text-white">
				{navLinkData.map(({ _id, title, link }) => (
					<li
						className="text-base font-medium font-Roboto tracking-wide cursor-pointer hover:text-dribble duration-300"
						key={_id}>
						<a href={`#${link}`} className="duration-500">
							{title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavItem;
