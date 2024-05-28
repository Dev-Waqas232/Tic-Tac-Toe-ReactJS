import GameInfo from "./components/GameInfo";

const App = () => {
  return (
    <main className="grid md:grid-cols-2 bg-bgPrimary w-full h-screen px-20">
      <section></section>
      <section className="flex flex-col h-full justify-center items-center">
        <GameInfo />
      </section>
    </main>
  );
};

export default App;
