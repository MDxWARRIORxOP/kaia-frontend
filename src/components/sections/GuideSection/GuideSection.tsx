import { useEffect, useState } from "react";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";

import "./GuideSection.css";
import Link from "next/link";

interface GuideSlide {
  leftCopy: string;
  image: string;
  imageAlt: string;
  headingLines: Array<{ text: string; accent?: boolean }>;
  body: string;
}

const guideSlides: GuideSlide[] = [
  {
    leftCopy: "Restoring ecosystems through verified climate action",
    image: "/images/windmillSection3_1.svg",
    imageAlt:
      "A wind turbine standing in an open field beneath a wide blue sky",
    headingLines: [{ text: "Nature-Based" }, { text: "Impact", accent: true }],
    body: "Protect and restore natural ecosystems through projects like forest conservation, soil carbon storage, and biodiversity protection. These solutions not only remove carbon but also strengthen communities and ecosystems.",
  },
  {
    leftCopy: "Removing carbon directly from the atmosphere",
    image: "/images/windmillSection3_2.svg",
    imageAlt:
      "A green hillside bordered by a dense tree line under soft daylight",
    headingLines: [
      { text: "Advance Climate" },
      { text: "Technology", accent: true },
    ],
    body: "Support advanced carbon removal technologies including direct air capture and ocean-based solutions. These projects focus on permanently removing CO2 and redefining the future of climate innovation.",
  },
  {
    leftCopy: "Accelerating the shift to a clean carbon free energy",
    image: "/images/windmillSection3_3.svg",
    imageAlt: "Multiple wind turbines across an arid landscape at dusk",
    headingLines: [{ text: "Energy" }, { text: "Transition", accent: true }],
    body: "Fund renewable energy projects such as wind, solar, and hydro that reduce dependency on fossil fuels and prevent future emissions at scale.",
  },
  {
    leftCopy: "Climate impact across borders and ecosystems",
    image: "/images/windmillSection3_4.svg",
    imageAlt: "A misty forest landscape with a river in the foreground",
    headingLines: [
      { text: "Global" },
      { text: "Carbon", accent: true },
      { text: "Projects" },
    ],
    body: "Explore verified projects across 20+ countries, covering diverse geographies and methodologies, all accessible through one unified platform.",
  },
];

export function GuideSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % guideSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const showSlide = (index: number) => {
    const boundedIndex = (index + guideSlides.length) % guideSlides.length;
    setActiveIndex(boundedIndex);
  };

  return (
    <section className="guide-section" aria-labelledby="guide-section-heading">
      <Container className="guide-section__container">
        <div className="guide-section__layout">
          <div className="guide-section__column guide-section__column--left">
            <div className="guide-section__left-stack" aria-live="polite">
              {guideSlides.map((slide, index) => (
                <p
                  key={slide.leftCopy}
                  className={`guide-section__left-copy ${
                    index === activeIndex
                      ? "guide-section__left-copy--active"
                      : ""
                  }`}
                >
                  {slide.leftCopy}
                </p>
              ))}
            </div>

            <Link href="/contact">
              <Button className="guide-section__button">
                Contact Us &rarr;
              </Button>
            </Link>
            <div className="guide-section__controls" aria-label="Guide slides">
              <button
                type="button"
                className="guide-section__control"
                onClick={() => showSlide(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous slide"
              >
                <span
                  className="guide-section__control-icon"
                  aria-hidden="true"
                >
                  ←
                </span>
              </button>
              <button
                type="button"
                className="guide-section__control"
                onClick={() => showSlide(activeIndex + 1)}
                disabled={activeIndex === guideSlides.length - 1}
                aria-label="Next slide"
              >
                <span
                  className="guide-section__control-icon"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="guide-section__media" aria-hidden="true">
            {guideSlides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt=""
                className={`guide-section__image ${
                  index === activeIndex ? "guide-section__image--active" : ""
                }`}
              />
            ))}
          </div>

          <div className="guide-section__column guide-section__column--right">
            <div className="guide-section__content-stack">
              {guideSlides.map((slide, index) => (
                <article
                  key={slide.body}
                  className={`guide-section__content ${
                    index === activeIndex
                      ? "guide-section__content--active"
                      : ""
                  }`}
                >
                  <span
                    className="guide-section__accent-line"
                    aria-hidden="true"
                  />
                  <h2
                    id={index === 0 ? "guide-section-heading" : undefined}
                    className="guide-section__heading"
                  >
                    {slide.headingLines.map((line) => (
                      <span
                        key={`${slide.body}-${line.text}`}
                        className={`guide-section__heading-line ${
                          line.accent
                            ? "guide-section__heading-line--accent"
                            : ""
                        }`}
                      >
                        {line.text}
                      </span>
                    ))}
                  </h2>
                  <p className="guide-section__body">{slide.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
