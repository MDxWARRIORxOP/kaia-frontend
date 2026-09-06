import { useEffect, useRef, useState } from "react";

import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { RotatingText } from "../../ui/RotatingText";

import "./Hero.css";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const [phase, setPhase] = useState<"rect" | "leaf" | "shrink">("rect");
  const sectionRef = useRef<HTMLElement | null>(null);
  const inlineLeafWrapperRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("leaf"), 800);
    const t2 = setTimeout(() => setPhase("shrink"), 825);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const updateLeafTarget = () => {
      if (!sectionRef.current || !inlineLeafWrapperRef.current) {
        return;
      }

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const wrapperRect = inlineLeafWrapperRef.current.getBoundingClientRect();

      const nextLeafTarget = {
        left: `${wrapperRect.left - sectionRect.left + wrapperRect.width / 2}px`,
        top: `${wrapperRect.top - sectionRect.top + wrapperRect.height / 2 - 14}px`,
      };

      sectionRef.current.style.setProperty(
        "--leaf-target-left",
        nextLeafTarget.left,
      );
      sectionRef.current.style.setProperty(
        "--leaf-target-top",
        nextLeafTarget.top,
      );
    };

    updateLeafTarget();
    window.addEventListener("resize", updateLeafTarget);

    return () => window.removeEventListener("resize", updateLeafTarget);
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      {phase === "rect" && (
        <div className="hero-rect">
          <Image width={100} height={100} src={"/images/heroTop.svg"} alt="" />
        </div>
      )}

      {phase !== "rect" && (
        <div
          className={`leaf-mask ${
            phase === "leaf" ? "leaf-mask--full" : "leaf-mask--small"
          }`}
        >
          <Image width={100} height={100} src={"/images/heroTop.svg"} alt="" />
        </div>
      )}

      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <Container
        className={`hero-content ${phase !== "shrink" ? "hero-content--hidden" : ""}`}
      >
        <div className="mx-auto max-w-[980px] text-center">
          <h1 className="hero-heading">
            <span className="hero-line">
              Powering{" "}
              <span
                ref={inlineLeafWrapperRef}
                className="leaf-inline-wrapper"
              />{" "}
              The Future Of
            </span>

            <br />

            <span className="hero-rotating-text">
              <RotatingText />
            </span>
          </h1>

          <p className="hero-subtext">
            KAIA connects verified carbon projects with global buyers - making
            climate action accessible, transparent, and scalable for businesses,
            developers, and individuals alike.
          </p>

          <div className="hero-buttons">
            <Link href="/for/buyers">
              <Button className="hero-button hero-button--primary">
                Buy Carbon Credits &rarr;
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button className="hero-button hero-button--secondary">
                Explore Marketplace &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
