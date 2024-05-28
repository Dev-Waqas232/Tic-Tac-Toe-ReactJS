import React from "react";

const Squares = () => {
  const initialBoard = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));

  return (
    <div className="grid grid-cols-3 gap-2 mt-6">
      {initialBoard.map((row, rowIndex) =>
        row.map((square, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            className="h-20 bg-bgPrimary border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-sm"
          >
            {square}
          </button>
        ))
      )}
    </div>
  );
};

export default Squares;
