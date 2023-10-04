import React from "react";
import Button from "./Button";

const ButtonList = () => {
    const btnList = [
      "All",
      "Music",
      "News",
      "Javascript",
      "Comedy",
      "Cricket",
      "Live",
      "Cooking",
      "Computer Programming",
    ];
  return (
    <div className="flex">
      {btnList.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
