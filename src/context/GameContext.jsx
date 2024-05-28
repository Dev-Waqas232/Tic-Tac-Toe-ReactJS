import { createContext, useContext } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);
