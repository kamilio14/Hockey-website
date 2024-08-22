import { useEffect, useState } from "react";
import { useContext } from "react";
import { playerContext } from "./playerContext";

export const SearchComponent = () => {
  const [inputState, setInputState] = useState<string>("");

  const { players, setFilteredPlayers } = useContext(playerContext);

  useEffect(() => {
    setFilteredPlayers(
      players.filter((player) => {
        return player.name.toLowerCase().includes(inputState);
      })
    );
  }, [inputState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { value } = e.target;
    setInputState(value);
  };

  return (
    <div className="search-component">
      <p className="search-players">Search players</p>
      <div className="bottom-part-search-component">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-input"
          onChange={handleChange}
          value={inputState}
        />
        <button className="search-btn">Go</button>
      </div>
    </div>
  );
};
