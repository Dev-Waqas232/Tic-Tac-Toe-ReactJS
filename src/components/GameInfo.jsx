const GameInfo = () => {
  return (
    <div className="text-white font-primary">
      <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      <h2 className="text-xl italic text-textSecondary">
        The classic game but, with a modern twist!
      </h2>
      <p className="mt-6 ">
        Each player can only have their last three moves on the board at any
        time. Once a player has made three moves, their oldest move will be
        removed from the board when they place a new mark. This unique rule
        ensures the game continues until one player wins by getting three in a
        row, eliminating the possibility of a draw.
      </p>
      <button className="bg-textPrimary mt-6 px-8 py-2 rounded-md font-semibold active:scale-95">
        New Game
      </button>
    </div>
  );
};

export default GameInfo;
