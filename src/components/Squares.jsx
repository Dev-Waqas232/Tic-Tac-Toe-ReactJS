import React from 'react';
import { useGame } from '../context/GameContext';

const Squares = () => {
  const { board, handleClick } = useGame();

  return (
    <div className="grid grid-cols-3 gap-2 mt-6">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`h-20 bg-bgPrimary border border-gray-700 text-5xl font-bold flex items-center justify-center rounded-sm  ${
            board[index] === 'X'
              ? 'text-textPrimary'
              : board[index] === 'O'
              ? 'text-white'
              : ''
          } `}
        >
          {board[index]}
        </button>
      ))}
    </div>
  );
};

export default Squares;
