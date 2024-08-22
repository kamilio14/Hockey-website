import Tampa from "./pictures/tampa.png";
import KuchLong from "./pictures/kuch-long.jpg";
import { PlayersSection } from "./PlayersSection";
export const MainContainerLeft = () => {
  return (
    <div className="main-container-left">
      <div className="video-purpose">
        <img src={Tampa} className="pic-video-purpose" />
      </div>
      <div className="kuch-long">
        <img src={KuchLong} className="kuch-long-pic" />
      </div>
      <PlayersSection />
    </div>
  );
};
