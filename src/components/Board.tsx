import React from "react";
import Square from "./Square";

function Board({
	board,
	onClick,
}: {
	board: Array<string | null>;
	onClick: (index: number) => void;
}) {
	return (
		<div className="board">
			{board.map((valor: string | null, index: number) => (
				<Square key={index} value={valor} onClick={() => onClick(index)} />
			))}
		</div>
	);
}

export default Board;
