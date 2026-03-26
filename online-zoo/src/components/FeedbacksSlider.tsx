import { useEffect, useState, type RefObject } from "react";
import { fetchFeedbacks } from "../lib/fetchFeedbacks";
import type { Feedback } from "../types/Feedback";

type Status = "loading" | "error" | "success";

type Props = {
  sliderRef: RefObject<HTMLDivElement | null>;
  offset: number;
};

export const FeedbacksSlider = ({ sliderRef, offset }: Props) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    fetchFeedbacks()
      .then((data) => {
        setFeedbacks(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err instanceof Error ? err.message : err);
        setStatus("error");
      });
  }, []);

  if (status === "loading")
    return <div className="loader">Loading feedbacks...</div>;
  if (status === "error")
    return <p>Something went wrong. Please, refresh the page</p>;

  return (
    <div
      ref={sliderRef}
      style={{ transform: `translateX(${offset}px)` }}
      className="feedback-container"
    >
      {feedbacks.map((feedback) => {
        return (
          <div key={feedback.id} className="feedback-card">
            <div className="quote-icon">
              <img src="/assets/icons/quote.svg" alt="quote" />
            </div>
            <h2 className="title">
              <label>${feedback.city}</label>, <label>${feedback.month}</label>{" "}
              <label>${feedback.year}</label>
            </h2>
            <p>${feedback.text}</p>
            <div className="feedback-author">${feedback.name}</div>
          </div>
        );
      })}
    </div>
  );
};
