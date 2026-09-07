"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import "./page.css";
import { marketplaceProjects, filterGroups, FilterGroup } from "@/lib/projects";

const benefits = [
  {
    title: "Standardization",
    description:
      "We bring diverse projects into a single, comparable format - making it easy to evaluate across methodologies, registries, and geographies.",
    icon: "stack",
  },
  {
    title: "Price Discovery",
    description:
      "See what a tonne of carbon actually costs across different sectors. Transparent pricing means informed decisions for buyers and fair value for sellers.",
    icon: "chart",
  },
  {
    title: "Trust & Verification",
    description:
      "Every listing is independently verified. In Phase 2, this evolves into automated exchange. Right now, it is the ultimate discovery tool for high-quality climate assets.",
    icon: "lock",
  },
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <span className="marketplace-page__eyebrow">
      <span />
      {children}
    </span>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M8.25 13.5C11.15 13.5 13.5 11.15 13.5 8.25C13.5 5.35 11.15 3 8.25 3C5.35 3 3 5.35 3 8.25C3 11.15 5.35 13.5 8.25 13.5Z"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M12.25 12.25L15 15"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M12.25 6.85C12.25 9.65 8 12.9 8 12.9S3.75 9.65 3.75 6.85C3.75 4.5 5.65 2.6 8 2.6C10.35 2.6 12.25 4.5 12.25 6.85Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="6.85" r="1.15" fill="currentColor" />
    </svg>
  );
}

function BenefitIcon({ icon }: { icon: string }) {
  return (
    <span className="marketplace-page__benefit-icon">
      {icon === "chart" ? (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M5 14V9.5M10 14V6M15 14V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 15H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
      {icon === "lock" ? (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect
            x="5"
            y="8.5"
            width="10"
            height="7"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7.25 8.5V6.75C7.25 5.23 8.48 4 10 4C11.52 4 12.75 5.23 12.75 6.75V8.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : null}
      {icon === "stack" ? (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M10 4L15 6.65L10 9.3L5 6.65L10 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M5 10L10 12.65L15 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 13.25L10 15.9L15 13.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </span>
  );
}

export default function MarketplacePage() {
  const [openFilters, setOpenFilters] = useState<
    Record<FilterGroup["id"], boolean>
  >({
    category: true,
    vintage: false,
    registry: false,
    sdg: false,
  });
  const [activeFilters, setActiveFilters] = useState<
    Record<FilterGroup["id"], string[]>
  >({
    category: [],
    vintage: [],
    registry: [],
    sdg: [],
  });
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFilterGroup = (groupId: FilterGroup["id"]) => {
    setOpenFilters((current) => ({ ...current, [groupId]: !current[groupId] }));
  };

  const toggleFilterOption = (groupId: FilterGroup["id"], option: string) => {
    setActiveFilters((current) => {
      const nextValues = current[groupId].includes(option)
        ? current[groupId].filter((value) => value !== option)
        : [...current[groupId], option];

      return { ...current, [groupId]: nextValues };
    });
  };

  const visibleProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return marketplaceProjects.filter((project) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          project.title,
          project.location,
          project.category,
          project.filterCategory,
          project.registry,
          project.sdg,
          project.vintage,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesFilters = filterGroups.every((group) => {
        const selectedOptions = activeFilters[group.id];
        if (selectedOptions.length === 0) {
          return true;
        }

        const projectValue =
          group.id === "category"
            ? project.filterCategory
            : group.id === "vintage"
              ? project.vintage
              : group.id === "registry"
                ? project.registry
                : project.sdg;

        return selectedOptions.join(" ").includes(projectValue);
      });

      return matchesSearch && matchesFilters;
    });
  }, [activeFilters, searchTerm]);

  return (
    <div className="marketplace-page">
      <section className="marketplace-page__hero">
        <img
          src={"/images/MarketplaceMain.svg"}
          alt="Dense green forest and river"
          className="marketplace-page__hero-image"
        />
        <div className="marketplace-page__hero-overlay" />

        <Container className="marketplace-page__hero-container">
          <div className="marketplace-page__hero-content">
            <span className="marketplace-page__hero-pill">MARKETPLACE</span>
            <h1>
              The KAIA
              <span>Marketplace</span>
            </h1>
            <p>
              Transparent access to verified carbon credit projects worldwide.
              One platform, fair pricing, real impact.
            </p>
          </div>
        </Container>
      </section>

      <section className="marketplace-page__intro">
        <Container>
          <div className="marketplace-page__intro-copy">
            <SectionEyebrow>Understanding Carbon Markets</SectionEyebrow>
            <h2>
              What is a <span>Carbon Marketplace?</span>
            </h2>
            <p>
              Historically, buying carbon credits was an opaque process
              involving brokers and hidden markups. KAIA's Marketplace changes
              this by providing standardization, transparent pricing, and
              verified trust - all in one platform.
            </p>
          </div>
        </Container>
      </section>

      <section className="marketplace-page__catalogue">
        <Container className="marketplace-page__catalogue-container">
          <div className="marketplace-page__catalogue-header">
            <div>
              <SectionEyebrow>Browse Projects</SectionEyebrow>
              <h2>
                Explore the <span>Catalogue</span>
              </h2>
            </div>

            <label
              className="marketplace-page__search"
              aria-label="Search projects"
            >
              <IconSearch />
              <input
                type="search"
                placeholder="Search projects, regions..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          <div className="marketplace-page__catalogue-grid">
            <aside
              className="marketplace-page__filters"
              aria-label="Project filters"
            >
              <span className="marketplace-page__filters-title">Filters</span>

              {filterGroups.map((group) => (
                <div
                  className="marketplace-page__filter-group"
                  key={group.title}
                >
                  <button
                    type="button"
                    onClick={() => toggleFilterGroup(group.id)}
                    aria-expanded={openFilters[group.id]}
                  >
                    {group.title}
                    <span aria-hidden="true">
                      {openFilters[group.id] ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {openFilters[group.id] ? (
                    <div className="marketplace-page__filter-options">
                      {group.options.map((option) => (
                        <button
                          type="button"
                          key={option}
                          className={
                            activeFilters[group.id].includes(option)
                              ? "marketplace-page__filter-option marketplace-page__filter-option--active"
                              : "marketplace-page__filter-option"
                          }
                          onClick={() => toggleFilterOption(group.id, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </aside>

            <div className="marketplace-page__projects">
              {visibleProjects.map((project, index) => (
                <article
                  className="marketplace-page__project-card"
                  key={`${project.title}-${index}`}
                >
                  <div className="marketplace-page__project-media">
                    <img src={project.image} alt={project.title} />
                    <span>{project.category}</span>
                  </div>

                  <div className="marketplace-page__project-body">
                    <span className="marketplace-page__project-location">
                      <IconPin />
                      {project.location}
                    </span>
                    <h3>{project.title}</h3>
                    <p>
                      {project.type}
                      {project.standard ? (
                        <span>{project.standard}</span>
                      ) : null}
                      <span>{project.volume}</span>
                    </p>
                    <div className="marketplace-page__project-price">
                      <span>Price per tonne</span>
                      <strong>{project.price}</strong>
                    </div>
                  </div>
                </article>
              ))}

              {visibleProjects.length === 0 ? (
                <div className="marketplace-page__empty">
                  <strong>No matching projects</strong>
                  <p>
                    Try removing a filter or searching for another project,
                    region, or registry.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="marketplace-page__benefits">
        <Container>
          <div className="marketplace-page__benefit-grid">
            {benefits.map((benefit) => (
              <article
                className="marketplace-page__benefit-card"
                key={benefit.title}
              >
                <BenefitIcon icon={benefit.icon} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
