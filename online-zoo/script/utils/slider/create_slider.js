import { calculate_metrics } from "./calculate_metrics.js";

export const create_slider = ({
  prev_btn,
  next_btn,
  slider,
  viewport,
  cardSelector,
}) => {
  const { slider_overflow, step_width } = calculate_metrics({
    slider,
    viewport,
    cardSelector,
  });

  let offset = 0;
  prev_btn.addEventListener("click", () => {
    offset += step_width;
    const remaining_overflow = slider_overflow + offset;
    if (remaining_overflow > slider_overflow) {
      slider.style.transform = `none`;
      offset = 0;
      return;
    }
    slider.style.transform = `translateX(${offset}px)`;
  });
  next_btn.addEventListener("click", () => {
    offset -= step_width;
    const remaining_overflow = slider_overflow + offset;
    if (remaining_overflow < 0) {
      slider.style.transform = `translateX(${-slider_overflow}px)`;
      offset -= remaining_overflow;
      return;
    }
    slider.style.transform = `translateX(${offset}px)`;
  });
};
