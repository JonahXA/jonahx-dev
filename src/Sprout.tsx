import Page from "./Page"
import Section from "./Section"

export default function Sprout() {
  return (
    <Page>
      <Section title="Sprout" subtitle="Fintech for students, by students">
        <p>
          Sprout is a trading & portfolio management platform I’m building to help college students
          understand investing, manage portfolios, and make data-driven financial decisions.  
        </p>
        <ul>
          <li>Full-stack: FastAPI backend, PostgreSQL, Docker, React frontend</li>
          <li>Real-time market data integration</li>
          <li>Dashboards for performance, allocation, and risk metrics</li>
          <li>Focus on financial literacy and accessibility</li>
        </ul>
      </Section>
    </Page>
  )
}
