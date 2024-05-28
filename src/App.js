import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import { GameProvider } from "./context/GameContext";

const App = () => {
  return (
    <GameProvider>
      <main className="grid md:grid-cols-2 bg-bgPrimary w-full h-screen px-20">
        <section className="flex flex-col h-full justify-center items-center">
          <Board />
        </section>
        <section className="flex flex-col h-full justify-center items-center">
          <GameInfo />
        </section>
      </main>
    </GameProvider>
  );
};

export default App;
