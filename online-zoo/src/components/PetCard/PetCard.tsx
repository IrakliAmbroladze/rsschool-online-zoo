import type { JSX } from "react";
import style from "./PetCard.module.scss";
export const PetCard = ({
  imgSource,
  imgAlt,
  description,
  btnText = "click",
}: {
  imgSource: string;
  imgAlt: string;
  description: string;
  btnText: string;
}): JSX.Element => {
  return (
    <div className={style.card}>
      <div className={style.cover}>
        <img src={imgSource} alt={imgAlt} />
      </div>
      <p className={style.description}>{description}</p>
      <button className={`${style.button} btn btn--pure-text-orange`}>
        <span>{btnText}</span>
        <div className={style.arrow}></div>
      </button>
    </div>
  );
};
