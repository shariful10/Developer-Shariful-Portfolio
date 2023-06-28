import React from "react";
import { resume } from "../../assets/img";
import { FaFileDownload } from "react-icons/fa";

const MyBtn = () => {
	return (
		<div className="mt-8 flex items-center gap-4">
			<a
				href="https://drive.google.com/file/d/1E85gR-M3-x99W5HPIXF08uXTJtxXbA1n/view?usp=sharing"
				className="myBtn">
				View Resume
			</a>
			<a href={resume} download className="myBtn">
				<FaFileDownload className="h-6 w-6" />
			</a>
		</div>
	);
};

export default MyBtn;
