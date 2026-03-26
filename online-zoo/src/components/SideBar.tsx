import { useState } from "react";

export const SideBar = () => {
  const [shrinked, setShrinked] = useState(false);
  const list: string[] = ["one", "two"];
  return (
    <section className="sidebar-container">
      <div className={`cameras ${shrinked && "shrinked"}`}>
        <div
          className="double_arrow"
          onClick={() => setShrinked((prev) => !prev)}
        >
          <img src="/assets/icons/double_arrow.svg" alt="double_arrow" />
        </div>
        <div className="sidebar">
          {list.map((item) => (
            <div className="pet-camera-card">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
