import Squares from "./Squares";

const Board = () => {
  return (
    <div>
      <div className="w-[400px] h-[400px] px-12 py-12 bg-bgSecondary rounded-md">
        <div className="font-primary flex justify-between items-center">
          <h2 className="font-bold text-3xl text-white">Player O</h2>
          <h2 className="font-bold text-3xl text-textPrimary">Player X</h2>
        </div>
        <Squares />
      </div>
    </div>
  );
};

export default Board;
