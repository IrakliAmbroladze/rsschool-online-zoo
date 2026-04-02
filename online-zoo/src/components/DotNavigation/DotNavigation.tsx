import { useState } from "react";
import style from "./DotNavigation.module.scss";
export const DotNavigation = ({
  dotNumber = 4,
  getActiveDotNumber,
}: {
  dotNumber?: number;
  getActiveDotNumber?: (dotNumber: number) => void;
}) => {
  const [activeDot, setActiveDot] = useState<number>(0);
  const dotsArr = Array.from({ length: dotNumber });
  const handleClick = (index: number) => {
    if (getActiveDotNumber) {
      getActiveDotNumber(index);
    }
    setActiveDot(index);
  };
  return (
    <div className={style.container}>
      {dotsArr.map((_, index) => {
        return (
          <button
            className={`${style.dot} ${index === activeDot ? style.active : ""}`}
            key={index}
            onClick={() => handleClick(index)}
          ></button>
        );
      })}
    </div>
  );
};
