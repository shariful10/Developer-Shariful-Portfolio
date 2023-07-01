import React from "react";
import { resume } from "../../assets/img";
import { FaFileDownload } from "react-icons/fa";

const MyBtn = () => {
	return (
		<div className="mt-8 flex items-center gap-4">
			<a href={resume} download className="myBtn flex mx-auto md:mx-0">
				Download Resume
				<FaFileDownload className="h-6 w-6 ml-2" />
			</a>
		</div>
	);
};

export default MyBtn;
