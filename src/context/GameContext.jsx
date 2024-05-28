import { createContext, useContext } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  return <GameContext.Provider>{children}</GameContext.Provider>;
};
