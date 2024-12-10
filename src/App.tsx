import "./App.css";
import React, { useState } from "react";

import Board from "./components/board";

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turno, setTurno] = useState("X");
	const handleClick = (index) => {
		if (board[index] || calcularGanador(board)) return;

		const nuevoTablero = [...board];
		nuevoTablero[index] = turno;
		setBoard(nuevoTablero);
		setTurno(turno === "X" ? "O" : "X");
	};
	const ganador = calcularGanador(board);
	return (
		<div>
			<Board board={board} onClick={handleClick} />
			<button onClick={() => setBoard(Array(9).fill(null))}>Reiniciar</button>
		</div>
	);
}

function calcularGanador(cuadros: string[]) {
	const combinacionesGanadoras = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Filas
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Columnas
		[0, 4, 8],
		[2, 4, 6], // Diagonales
	];

	for (let i = 0; i < combinacionesGanadoras.length; i++) {
		const [a, b, c] = combinacionesGanadoras[i];
		if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
			return cuadros[a];
		}
	}
	return null;
}

export default App;
