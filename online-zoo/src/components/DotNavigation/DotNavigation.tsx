import style from "./DotNavigation.module.scss";
export const DotNavigation = () => {
  return (
    <div className={style.container}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>
  );
};
