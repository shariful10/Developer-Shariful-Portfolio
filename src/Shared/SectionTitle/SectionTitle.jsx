import React from "react";

const SectionTitle = ({ heading, sizing }) => {
	return (
		<>
			<h2 className="text-5xl font-LobsterTwo text-center">{heading}</h2>
			<div className="w-1/6 mx-auto my-5">
				<hr />
			</div>
		</>
	);
};

export default SectionTitle;
