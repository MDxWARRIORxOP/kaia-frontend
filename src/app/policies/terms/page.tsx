import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactDetails } from "@/lib/constants";

import "../page.css";

export default function TermsPage() {
  return (
    <div className="policy-page">
      <section className="policy-page__hero">
        <Container className="policy-page__hero-container">
          <span className="policy-page__pill">Legal</span>
          <h1 className="policy-page__title">Terms &amp; Conditions</h1>
          <p className="policy-page__subtext">
            We&apos;re finalizing the terms that govern your use of the KAIA
            platform.
          </p>
        </Container>
      </section>

      <section className="policy-page__body">
        <Container className="policy-page__body-container">
          <div className="policy-page__notice">
            <h2>This page is coming soon</h2>
            <p>
              Our full Terms &amp; Conditions are currently being drafted and
              will be published here shortly. In the meantime, if you have any
              questions about using KAIA, please reach out to our team directly.
            </p>
            <Link href="/contact">
              <Button className="policy-page__notice-button">
                Contact Us &rarr;
              </Button>
            </Link>
            <p className="policy-page__notice-email">
              Or email us at{" "}
              <a href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
