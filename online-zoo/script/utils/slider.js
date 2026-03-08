export const slider = ({
  prev_btn,
  next_btn,
  slider,
  viewport,
  cardSelector,
}) => {
  const slider_width = slider.offsetWidth;
  const slider_overflow = slider_width - viewport;
  const slider_styles = window.getComputedStyle(slider);
  const gap = parseFloat(slider_styles.getPropertyValue("gap"));
  const card_width = slider.querySelector(cardSelector).offsetWidth;
  const step_width = card_width + gap;

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
