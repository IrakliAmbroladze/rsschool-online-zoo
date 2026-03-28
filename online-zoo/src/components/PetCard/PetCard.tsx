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
      <div className={style.card__cover}>
        <img src={imgSource} alt={imgAlt} />
      </div>
      <p>{description}</p>
      <button className="btn btn--pure-text-orange">
        <span>view live cam</span>
        <img src="./assets/icons/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
};
