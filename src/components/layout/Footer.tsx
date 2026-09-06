import Link from "next/link";
// import footerBackground from "../../assets/Footer_logo.svg";
// import footerLogo from "../../assets/Logo_white.svg";
import { contactDetails, navigationItems } from "../../lib/constants";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Input } from "../ui/Input";

const socialLinks = ["FB", "IN", "IG"];

export function Footer() {
  return (
    <footer className="relative z-20 overflow-hidden bg-primary pt-14 text-white sm:pt-16">
      <Container className="relative z-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.55fr_0.75fr] md:gap-10 lg:grid-cols-[1.35fr_0.55fr_0.7fr] lg:gap-16">
          <div className="max-w-[410px]">
            <img
              src={"/images/logoWhite.svg"}
              alt="KAIA"
              className="h-[50px] w-auto"
            />
            <p className="mt-4 text-[16px] font-medium leading-[24px] text-white/80">
              Stay informed with updates, industry insights, and exclusive
              Ecoriz offers.
            </p>

            <form className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-11 rounded-[8px] border border-white/10 bg-white/14 px-5 py-2 text-[16px] font-medium leading-6 text-white placeholder:text-white/80 sm:w-[274px]"
              />
              <Button
                type="submit"
                variant="secondary"
                className="h-11 rounded-[4px] border-none bg-white px-5 py-2 text-[16px] font-semibold leading-6 text-primary shadow-none hover:bg-white"
              >
                Subscribe
              </Button>
            </form>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item}
                  href="/"
                  aria-label={item}
                  className="inline-flex h-[39px] w-[39px] items-center justify-center rounded-full border border-white/20 text-[16px] font-medium leading-6 text-white/80 transition-colors duration-200 hover:border-white/35 hover:text-white/80"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[16px] font-semibold leading-6 text-white">
              Menu
            </h2>
            <nav className="mt-6 flex flex-col gap-5">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-[16px] font-medium leading-6 text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-[16px] font-medium leading-6 text-white/80 transition-colors duration-200 hover:text-white"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-[16px] font-semibold leading-6 text-white">
              Contact
            </h2>
            <div className="mt-6 space-y-5 text-[16px] font-medium leading-6 text-white/80">
              <p>{contactDetails.email}</p>
              <p>{contactDetails.phone}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-[16px] font-semibold leading-6 text-white">
                Address
              </h3>
              <p className="mt-6 max-w-[360px] text-[16px] font-medium leading-10 text-white/80 sm:leading-[28px]">
                {contactDetails.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-white/20 pt-9">
          <div className="flex flex-col gap-4 text-[16px] font-medium leading-6 text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <p>2026 KAIA. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-8">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none relative z-0 mt-10 overflow-hidden">
        <Container>
          <img
            src={"/images/footerLogo.svg"}
            alt=""
            aria-hidden="true"
            className="block w-[872px] max-w-none shrink-0"
          />
        </Container>
      </div>
    </footer>
  );
}
