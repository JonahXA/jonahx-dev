// src/Sprout.tsx
import Page from "./Page"
import Section from "./Section"
import sproutLogo from "./assets/sprout-logo.png"  // <-- import the file

export default function Sprout() {
  return (
    <Page>
      <Section title="Sprout" subtitle="Fintech for students, by students">
        <div className="sprout-hero">
          <img
            src={sproutLogo}
            alt="Sprout logo"
            className="sprout-logo"
            width={140}
            height={140}
          />

          <div>
            <p>
              Sprout is a trading & portfolio management platform I’m building to help college students
              understand investing, manage portfolios, and make data-driven financial decisions.
            </p>
            <ul>
              <li>Full-stack: FastAPI backend, PostgreSQL, Docker, React</li>
              <li>Real-time market data integration</li>
              <li>Dashboards for performance, allocation, and risk</li>
            </ul>
          </div>
        </div>
      </Section>
    </Page>
  )
}
