import React from "react";

function Square({
	value,
	onClick,
}: {
	value: string | null;
	onClick: () => void;
}) {
	return (
		<button className={`square ${value ? value : ""}`} onClick={onClick}>
			{value}
		</button>
	);
}

export default Square;
