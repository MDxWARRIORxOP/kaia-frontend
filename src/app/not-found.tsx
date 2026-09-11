import Link from "next/link";

import { Button } from "@/components/ui/Button";

import "@/css/state-page.css";

export default function NotFound() {
  return (
    <div className="state-page">
      <div className="state-page__container">
        <p className="state-page__numeral">404</p>

        <span className="state-page__pill">
          <span className="state-page__pill-line" />
          Page Not Found
        </span>

        <h1 className="state-page__title">
          This page has already been retired.
        </h1>

        <p className="state-page__body">
          Much like a retired carbon credit, this page has served its purpose
          and moved on. The link might be broken, or it may never have existed
          in the first place.
        </p>

        <div className="state-page__actions">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
