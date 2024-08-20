import { useGame } from '../context/GameContext';
import Squares from './Squares';

const Board = () => {
  const { currentPlayer } = useGame();

  return (
    <div>
      <div className="w-[400px] h-[400px] px-12 py-12 bg-bgSecondary rounded-md">
        <div className="font-primary flex justify-between items-center">
          <h2
            className={`text-3xl ${
              currentPlayer === 'O' && 'font-bold'
            } text-white`}
          >
            Player O
          </h2>
          <h2
            className={`text-3xl ${
              currentPlayer === 'X' && 'font-bold'
            } text-textPrimary`}
          >
            Player X
          </h2>
        </div>
        <Squares />
      </div>
    </div>
  );
};

export default Board;
