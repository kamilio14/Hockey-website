type PlayerProps = {
  name: string;
  photo: string;
};

export const Player = ({ name, photo }: PlayerProps) => {
  return (
    <div className="player">
      <img src={photo} className="player-photo" />
      <p>{name}</p>
    </div>
  );
};
