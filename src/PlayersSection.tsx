import PlayersObject from "./playersObject";
import { Player } from "./Player.component";
import { useContext } from "react";
import { playerContext } from "./playerContext";

export const PlayersSection = () => {
  const { filteredPlayers } = useContext(playerContext);

  return (
    <div className="players-section">
      <section className="players-info">
        <h4 className="all-players-text">All players info</h4>
        <p className="p-tag-players">
          Search throught players yourself and find out more in depth info
        </p>
      </section>
      <div className="players-container">
        {filteredPlayers.map((item, index) => {
          return <Player name={item.name} photo={item.photo} key={index} />;
        })}
      </div>
      <p className="p-tag-players">
        Come join like-minded people and sign up now
      </p>
    </div>
  );
};
