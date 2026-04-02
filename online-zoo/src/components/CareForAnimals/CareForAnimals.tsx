import { useState } from "react";
import { DotNavigation } from "../DotNavigation/DotNavigation";
import { PetCard } from "../PetCard/PetCard";
import style from "./CareForAnimals.module.scss";
import { CARE_CARDS } from "../../constants/care";

export const CareForAnimals = () => {
  const [activeCardNumber, setActiveCardNumber] = useState<number>(0);

  const activeCard = CARE_CARDS[activeCardNumber];

  return (
    <section className={style.care}>
      <div className={style.container}>
        <PetCard
          imgSource={`/assets/images/${activeCard.image}.png`}
          imgAlt={activeCard.alt}
          description={activeCard.description}
          btnText={activeCard.btnText}
        />
        <DotNavigation getActiveDotNumber={setActiveCardNumber} />
      </div>
    </section>
  );
};
