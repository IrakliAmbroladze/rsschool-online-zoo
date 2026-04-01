import { useState } from "react";
import style from "./DotNavigation.module.scss";
export const DotNavigation = ({ dotNumber = 4 }: { dotNumber?: number }) => {
  const [activeDot, setActiveDot] = useState<number>(0);
  const dotsArr = Array.from({ length: dotNumber });
  return (
    <div className={style.container}>
      {dotsArr.map((_, index) => {
        return (
          <div
            className={`${style.dot} ${index === activeDot ? style.active : ""}`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
