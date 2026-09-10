"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactDetails } from "@/lib/constants";
import "./page.css";
import { useSearchParams } from "next/navigation";

interface ContactField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  wide?: boolean;
}

const fieldRows: ContactField[][] = [
  [
    {
      id: "full-name",
      label: "Full Name *",
      placeholder: "John Doe",
      type: "text",
    },
    {
      id: "email",
      label: "Email *",
      placeholder: "john@company.com",
      type: "email",
    },
  ],
  [
    {
      id: "organization",
      label: "Organization *",
      placeholder: "Your company name",
      type: "text",
      wide: true,
    },
  ],
  [
    {
      id: "volume",
      label: "Target Volume / Budget *",
      placeholder: "e.g. 10,000 tonnes / $50k budget",
      type: "text",
      wide: true,
    },
  ],
];

function IconWrench() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M11.5 3.5a3.25 3.25 0 0 0-4.31 3.62L3.5 10.8v2.2h2.2l3.68-3.69A3.25 3.25 0 0 0 13.5 5.9l-2.1 2.1-1.4-1.4 2.1-2.1-.6-1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.5 6.5L9.25 10.25C9.69 10.59 10.31 10.59 10.75 10.25L15.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.5"
        y="5"
        width="13"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.43 4.75L7.54 7.34C7.71 7.74 7.61 8.21 7.29 8.5L6.45 9.25C7.09 10.72 8.28 11.91 9.75 12.55L10.5 11.71C10.79 11.39 11.26 11.29 11.66 11.46L14.25 12.57C14.72 12.77 14.97 13.28 14.84 13.77L14.52 14.95C14.39 15.45 13.93 15.8 13.41 15.77C8.49 15.45 4.55 11.51 4.23 6.59C4.2 6.07 4.55 5.61 5.05 5.48L6.23 5.16C6.72 5.03 7.23 5.28 7.43 5.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M15.25 8.5C15.25 12.25 10 16.25 10 16.25S4.75 12.25 4.75 8.5C4.75 5.6 7.1 3.25 10 3.25C12.9 3.25 15.25 5.6 15.25 8.5Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="8.5"
        r="1.65"
        stroke="currentColor"
        strokeWidth="1.55"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4.25 4.75H15L13.95 10.15C13.85 10.67 13.39 11.05 12.86 11.05H6.33C5.79 11.05 5.32 10.66 5.23 10.12L4.25 4.75ZM4.25 4.75L3.95 3.1H2.5"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.75" cy="14" r="1" fill="currentColor" />
      <circle cx="12.45" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactUsPage() {
  const search = useSearchParams();
  const [active, setActive] = useState(Number(search.get("active")) || 0);

  return (
    <div className="contact-page">
      <section className="contact-page__hero">
        <img
          src={"/images/contactMain.svg"}
          alt="Terraced green fields at sunrise"
          className="contact-page__hero-image"
        />
        <div className="contact-page__hero-overlay" />

        <Container className="contact-page__hero-container">
          <div className="contact-page__hero-content">
            <span className="contact-page__hero-pill">THE CLIMATE GATEWAY</span>
            <h1>
              Let's Build Your
              <span>Climate Strategy.</span>
            </h1>
            <p>
              Whether you're offsetting emissions or listing a verified project,
              KAIA connects you with the global carbon market.
            </p>
          </div>
        </Container>
      </section>

      <section className="contact-page__goals">
        <Container className="contact-page__goals-container">
          <div className="contact-page__goals-copy">
            <span className="contact-page__eyebrow">
              <span />
              Choose Your Path
            </span>
            <h2>
              Tell us About
              <span>Your Goals</span>
            </h2>
            <p>
              Select whether you're looking to buy credits or list a project,
              and we'll tailor the conversation to your needs.
            </p>

            <div className="contact-page__details" aria-label="Contact details">
              <div className="contact-page__detail">
                <span className="contact-page__detail-icon">
                  <IconMail />
                </span>
                <div>
                  <strong>Email</strong>
                  <Link href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </Link>
                </div>
              </div>

              <div className="contact-page__detail">
                <span className="contact-page__detail-icon">
                  <IconPhone />
                </span>
                <div>
                  <strong>Phone</strong>
                  <Link
                    href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
                  >
                    {contactDetails.phone}
                  </Link>
                </div>
              </div>

              <div className="contact-page__detail">
                <span className="contact-page__detail-icon">
                  <IconPin />
                </span>
                <div>
                  <strong>Office</strong>
                  <p>{contactDetails.address}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-page__form">
            <div
              className="contact-page__path-toggle"
              aria-label="Contact reason"
            >
              <span>
                <button
                  type="button"
                  className={`contact-page__path-button contact-page__path-button${active === 0 ? "--active" : ""}`}
                  onClick={() => {
                    setActive(0);
                  }}
                >
                  <IconCart />I want to buy credits
                </button>
                <button
                  type="button"
                  className={`contact-page__path-button contact-page__path-button${active === 1 ? "--active" : ""}`}
                  onClick={() => {
                    setActive(1);
                  }}
                >
                  <img
                    src={"/icons/singleBlackLeaf.svg"}
                    alt=""
                    aria-hidden="true"
                  />
                  I want to list a project
                </button>
              </span>
              <button
                type="button"
                className={`contact-page__path-button contact-page__path-button--eaas contact-page__path-button${active === 2 ? "--active" : ""}`}
                onClick={() => {
                  setActive(2);
                }}
              >
                <IconWrench />I want engineering services
              </button>
            </div>

            {fieldRows
              .filter((row) => active !== 2 || row[0].id !== "volume")
              .map((row) => (
                <div className="contact-page__form-row" key={row[0].id}>
                  {row.map((field) => (
                    <label
                      className={
                        field.wide
                          ? "contact-page__field contact-page__field--wide"
                          : "contact-page__field"
                      }
                      htmlFor={field.id}
                      key={field.id}
                    >
                      <span>{field.label}</span>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    </label>
                  ))}
                </div>
              ))}

            <label
              className="contact-page__field contact-page__field--wide"
              htmlFor="goals"
            >
              <span>Tell us about your climate goals</span>
              <textarea
                id="goals"
                placeholder="Share your sustainability objectives, timeline, or any specific requirements..."
              />
            </label>

            <Button type="submit" className="contact-page__submit">
              {active === 0
                ? "Request Credits"
                : active === 1
                  ? "List My Project"
                  : "Request a Discovery Call"}
              <IconArrowRight />
            </Button>
          </form>
        </Container>
      </section>

      <section className="contact-page__trusted">
        <Container className="contact-page__trusted-container">
          <div className="contact-page__trusted-copy">
            <h2>
              Trusted by Teams Driving
              <span>Real Climate Impact.</span>
            </h2>
            <p>
              From enterprises to climate consultants, teams use KAIA to
              simplify carbon markets and deliver measurable results.
            </p>
          </div>

          <div className="contact-page__trusted-stage">
            <div className="contact-page__map" aria-hidden="true">
              <img src={"/images/mapImage.png"} alt="" />
              <span className="contact-page__map-pin contact-page__map-pin--one" />
              <span className="contact-page__map-pin contact-page__map-pin--two" />
              <span className="contact-page__map-pin contact-page__map-pin--three" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
