export const slider = () => {
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider = document.getElementById("slider");
  const slider_width = slider.offsetWidth;
  const container = document.getElementById("pets-container");
  const viewport = container.offsetWidth - 80; //deducting padding
  const slider_overflow = slider_width - viewport;
  const slider_styles = window.getComputedStyle(slider);
  const gap = Number(slider_styles.getPropertyValue("gap").slice(0, -2));
  const card_width = document.querySelector(".animals-card").offsetWidth;

  const step_width = card_width + gap;

  let accumulated_transformation = 0;
  left_arrow.addEventListener("click", () => {
    accumulated_transformation += step_width;
    const remaining_overflow = slider_overflow + accumulated_transformation;
    if (remaining_overflow > slider_overflow) {
      slider.style.transform = `none`;
      accumulated_transformation = 0;
      return;
    }
    slider.style.transform = `translate(${accumulated_transformation}px)`;
  });
  right_arrow.addEventListener("click", () => {
    accumulated_transformation -= step_width;
    const remaining_overflow = slider_overflow + accumulated_transformation;
    if (remaining_overflow < 0) {
      slider.style.transform = `translate(${-slider_overflow}px)`;
      accumulated_transformation -= remaining_overflow;
      return;
    }
    slider.style.transform = `translate(${accumulated_transformation}px)`;
  });
};
