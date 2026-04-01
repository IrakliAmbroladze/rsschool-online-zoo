import { useState } from "react";
import { DotNavigation } from "../DotNavigation/DotNavigation";
import { PetCard } from "../PetCard/PetCard";
import style from "./CareForAnimals.module.scss";

export const CareForAnimals = () => {
  const [activeCardNumber, setActiveCardNumber] = useState<number>(0);
  const getActiveDotNumber = (value: number) => {
    setActiveCardNumber(value);
  };
  console.log("active dot is: ", activeCardNumber);
  return (
    <section className={style.care}>
      <div className={style.container}>
        <PetCard
          imgSource="/assets/images/panda_cake.png"
          imgAlt="panda-cake"
          description="Your $30 could give Lucas  a slice of panda cake, made with our secret recipe."
          btnText="feed"
        />
        <DotNavigation getActiveDotNumber={getActiveDotNumber} />
      </div>
    </section>
  );
};
