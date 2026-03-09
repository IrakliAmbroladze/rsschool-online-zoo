export const calculate_metrics = ({ slider, viewport, cardSelector }) => {
  const slider_width = slider.offsetWidth;
  const slider_overflow = slider_width - viewport;
  const slider_styles = window.getComputedStyle(slider);
  const gap = parseFloat(slider_styles.getPropertyValue("gap"));
  const card_width = slider.querySelector(cardSelector).offsetWidth;
  const step_width = card_width + gap;

  return {
    slider_width,
    slider_overflow,
    slider_styles,
    gap,
    card_width,
    step_width,
  };
};
