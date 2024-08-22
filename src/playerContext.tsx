import PlayersObject from "./playersObject";
import { useState, ReactNode } from "react";

import { createContext } from "react";

type Player = {
  name: string;
  photo: string;
};

type PlayerContextType = {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  filteredPlayers: Player[];
  setFilteredPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
};

export const playerContext = createContext<PlayerContextType>({
  players: [],
  setPlayers: () => {},
  filteredPlayers: [],
  setFilteredPlayers: () => {},
});

export const ContextProvider = ({ children }: any) => {
  const [players, setPlayers] = useState<Player[]>(PlayersObject);
  const [filteredPlayers, setFilteredPlayers] =
    useState<Player[]>(PlayersObject);

  const value = { players, setPlayers, filteredPlayers, setFilteredPlayers };

  return (
    <playerContext.Provider value={value}>{children}</playerContext.Provider>
  );
};
