import type { JSX } from "react";
import style from "./PetCard.module.scss";
export const PetCard = ({
  imgSource,
  imgAlt,
  description,
}: {
  imgSource: string;
  imgAlt: string;
  description: string;
}): JSX.Element => {
  return (
    <div className={style.card}>
      <div className={style.cover}>
        <img src={imgSource} alt={imgAlt} />
      </div>
      <p className={style.description}>{description}</p>
      <div className={style.button}>
        <button className={`${style.button} btn btn--pure-text-orange`}>
          <span>feed</span>
          <div className={style.arrow}></div>
          {/* <img src="./assets/icons/arrow.svg" alt="arrow" /> */}
        </button>
      </div>
    </div>
  );
};
