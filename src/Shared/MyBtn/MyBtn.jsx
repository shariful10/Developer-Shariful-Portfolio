import React from "react";
import { resume } from "../../assets/img";

const MyBtn = () => {
	return (
		<div className="mt-8">
			<a href={resume} download className="bg-gradient-to-r from-rose-600 to-primary  py-3 px-5 rounded-lg font-Roboto font-medium">
				Download Resume
			</a>
		</div>
	);
};

export default MyBtn;
