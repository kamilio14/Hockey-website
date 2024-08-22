import { Button } from "./button.component";
import { useState } from "react";
import { MouseEvent } from "react";
export const TopContainer = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  console.log("selectedButton", selectedButton);
  const InitlaState = [
    { id: 0, clicked: false, name: "Home" },
    { id: 1, clicked: false, name: "Blog" },
    { id: 2, clicked: false, name: "Start Here" },
    { id: 3, clicked: false, name: "Best Videos" },
    { id: 4, clicked: false, name: "All Videos" },
    { id: 5, clicked: false, name: "About" },
    { id: 6, clicked: false, name: "Contact" },
    { id: 7, clicked: false, name: "Store" },
    { id: 8, clicked: false, name: "Book list" },
    { id: 9, clicked: false, name: "Life Purpose Course" },
    { id: 10, clicked: false, name: "Forum" },
  ];

  const handleButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (selectedButton !== index) setSelectedButton(index);
  };

  return (
    <div className="top-container">
      {InitlaState.map((btn, index) => {
        return (
          <Button
            name={btn.name}
            handleButtonClick={(event) => handleButtonClick(event, index)}
            index={index}
            selectedButton={selectedButton}
          />
        );
      })}
      <button className="donate-btn">Donate</button>
    </div>
  );
};
