"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

import "@/css/state-page.css";

function IconWarning() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.16A1.5 1.5 0 0 0 3.42 20.4h17.16a1.5 1.5 0 0 0 1.31-2.38L13.71 3.86a1.5 1.5 0 0 0-2.42 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="state-page">
      <div className="state-page__container">
        <span className="state-page__icon">
          <IconWarning />
        </span>

        <span className="state-page__pill">
          <span className="state-page__pill-line" />
          Something Went Wrong
        </span>

        <h1 className="state-page__title">We hit an unexpected error.</h1>

        <p className="state-page__body">
          This page ran into a problem while loading. Our team has been
          notified. Please try again, or head back to the homepage in the
          meantime.
        </p>

        <div className="state-page__actions">
          <Button onClick={() => reset()}>Try Again</Button>
          <Link href="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>

        {error.digest ? (
          <span className="state-page__digest">Error ID: {error.digest}</span>
        ) : null}
      </div>
    </div>
  );
}
