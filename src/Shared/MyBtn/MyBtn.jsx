import React from "react";
import { resume } from "../../assets/img";

const MyBtn = () => {
	return (
		<div className="mt-8">
			<a href={resume} download className="myBtn">
				Download Resume
			</a>
		</div>
	);
};

export default MyBtn;
