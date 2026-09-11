"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#f7f7f2",
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
            maxWidth: "520px",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(220, 38, 38, 0.08)",
              color: "#b91c1c",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="30"
              height="30"
              aria-hidden="true"
            >
              <path
                d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.16A1.5 1.5 0 0 0 3.42 20.4h17.16a1.5 1.5 0 0 0 1.31-2.38L13.71 3.86a1.5 1.5 0 0 0-2.42 0Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <h1
            style={{
              margin: 0,
              color: "#101e07",
              fontSize: "clamp(26px, 3.4vw, 36px)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Something went wrong.
          </h1>

          <p
            style={{
              margin: 0,
              color: "#4b5a41",
              fontSize: "16px",
              lineHeight: 1.6,
              maxWidth: "420px",
            }}
          >
            KAIA ran into an unexpected error and couldn&apos;t load this
            page. Our team has been notified. Please try again, or refresh
            the page.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "14px",
              marginTop: "8px",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: "12px 24px",
                borderRadius: "999px",
                border: "none",
                background: "#166534",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: "12px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(16, 30, 7, 0.15)",
                background: "#ffffff",
                color: "#101e07",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Back to Home
            </a>
          </div>

          {error.digest ? (
            <span
              style={{
                marginTop: "8px",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "rgba(16, 30, 7, 0.05)",
                color: "#8a978a",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
            >
              Error ID: {error.digest}
            </span>
          ) : null}
        </div>
      </body>
    </html>
  );
}
