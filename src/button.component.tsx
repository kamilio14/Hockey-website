import { MouseEvent } from "react";

type ButtonProps = {
  name: string;
  handleButtonClick: (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => void;
  index: number;
  selectedButton: number | null;
};

export const Button = ({
  name,
  handleButtonClick,
  index,
  selectedButton,
}: ButtonProps) => {
  const styles = {
    backgroundColor: selectedButton === index ? "white" : " #7e7c7c",
    color: selectedButton === index ? "black" : "white",
  };

  return (
    <>
      <button
        className="btn-top-container"
        onClick={(e) => handleButtonClick(e, index)}
        style={styles}
      >
        {name}
      </button>
    </>
  );
};
