import { useEffect, useState } from "react";

const words = [
  "Carbon Markets With Transparency",
  "Climate Action Through Real Impact",
  "Sustainable Growth For Organizations",
  "Trusted Environmental Finance",
];

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    if (nextIndex !== null) {
      return;
    }

    const holdTimeout = window.setTimeout(() => {
      const upcomingIndex = (currentIndex + 1) % words.length;
      setDirection(upcomingIndex === 0 ? "down" : "up");
      setNextIndex(upcomingIndex);
    }, 2200);

    return () => window.clearTimeout(holdTimeout);
  }, [currentIndex, nextIndex]);

  useEffect(() => {
    if (nextIndex === null) {
      return;
    }

    const animationTimeout = window.setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex(null);
    }, 700);

    return () => window.clearTimeout(animationTimeout);
  }, [nextIndex]);

  return (
    <span className={`rotating-text rotating-text--${direction}`}>
      <span
        className={`rotating-text__item ${
          nextIndex === null
            ? "rotating-text__item--current"
            : "rotating-text__item--exit"
        }`}
      >
        {words[currentIndex]}
      </span>
      {nextIndex !== null && (
        <span className="rotating-text__item rotating-text__item--enter">
          {words[nextIndex]}
        </span>
      )}
    </span>
  );
}
