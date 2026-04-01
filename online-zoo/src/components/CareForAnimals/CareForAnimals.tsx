import { useState } from "react";
import { DotNavigation } from "../DotNavigation/DotNavigation";
import { PetCard } from "../PetCard/PetCard";
import style from "./CareForAnimals.module.scss";

const CARE_CARDS = [
  {
    image: "panda_care",
    alt: "panda_care",
    description:
      "Your $30 could give Lucas  a slice of panda cake, made with our secret recipe.",
    btnText: "feed",
  },
  {
    image: "tiger_care",
    alt: "tiger_care",
    description:
      " Your $150 will help to care for Senja,  a Sumatran tiger, for three weeks.",
    btnText: "feed",
  },
  {
    image: "lemur_care",
    alt: "lemur_care",
    description:
      "With your support, we can give Andy his favorite fruits. Especially when it's not fruit season in its natural habitat.",
    btnText: "feed",
  },
  {
    image: "eagles_care",
    alt: "eagles_care",
    description:
      "Sam & Lora have hatched and raised numerous young and will be happy with your help. ",
    btnText: "feed",
  },
];

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
