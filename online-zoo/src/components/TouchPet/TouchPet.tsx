import style from "./TouchPet.module.scss";

export const TouchPet = () => {
  return (
    <section id="touch-pet" className={style.touchPet}>
      <div className={style.cover}>
        <img src="/assets/images/touch.jpg" alt="touch-pet" />
      </div>
    </section>
  );
};
