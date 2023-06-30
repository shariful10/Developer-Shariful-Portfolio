import React from "react";
import { footerIcons } from "./footerIcons";

const FooterIcon = () => {
	return (
		<div className="flex justify-center items-center gap-4">
			{footerIcons.map(({ _id, link, img }) => (
				<a key={_id} href={link} target="_blank">
					<div className="p-2 bg-white rounded-full">
						<img className="h-8 w-8" src={img} alt="" />
					</div>
				</a>
			))}
		</div>
	);
};

export default FooterIcon;
