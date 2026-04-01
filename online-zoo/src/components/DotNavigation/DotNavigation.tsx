import style from "./DotNavigation.module.scss";
export const DotNavigation = ({ dotNumber = 4 }: { dotNumber?: number }) => {
  const dotsArr = Array.from({ length: dotNumber });
  return (
    <div className={style.container}>
      {dotsArr.map((_, index) => {
        return <div className={style.dot} key={index}></div>;
      })}
    </div>
  );
};
