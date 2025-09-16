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
        Fintech for students, by students. Building with{" "}
        <a
          href="https://www.linkedin.com/in/dustinchandra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dustin
        </a>
        .
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
