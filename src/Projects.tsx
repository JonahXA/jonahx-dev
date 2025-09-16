// src/Projects.tsx
import Page from "./Page"
import Section from "./Section"
import cryptoPdf from "./assets/crypto-research.pdf" // vite will resolve to a hashed URL

type Entry = {
  title: string
  date: string
  blurb: string
  href?: string
}

const projects: Entry[] = [
  {
    title: "Cryptocurrency Investment Analysis (23 coins) — Risk/Return & Simulations",
    date: "March 2025",
    blurb:
      "Data pipeline in Python (NumPy, Pandas, Matplotlib/Seaborn) to compute annualized returns, volatility, Sharpe ratios, correlations, and portfolio simulations; compared diversified portfolio vs. top-5 Sharpe selection and visualized outcomes.",
    href: cryptoPdf, // opens your PDF
  },
]

const writings: Entry[] = [
  {
    title: "American Psycho — Monotony Analysis",
    date: "September 2025",
    blurb:
      "A short literary analysis focusing on repetition, routine, and the erosion of meaning through monotony.",
    // Add href when your file is ready, e.g. "/writings/american-psycho.pdf"
  },
]

function Card({ e }: { e: Entry }) {
  return (
    <div className="pw__card">
      <div className="pw__row">
        <h3 className="pw__title">{e.title}</h3>
        <span className="pw__date">{e.date}</span>
      </div>
      <p className="pw__blurb">{e.blurb}</p>
      {e.href ? (
        <p className="pw__links">
          <a href={e.href} target="_blank" rel="noopener noreferrer">View document</a>
        </p>
      ) : null}
    </div>
  )
}

export default function Projects() {
  return (
    <Page>
      <Section
        title="Projects & Writings"
        subtitle="Left: Projects • Right: Writings"
      >
        <div className="pw2">
          {/* Left column — Projects */}
          <div className="pw-col left">
            <h4 className="pw__heading">Projects</h4>
            <ol className="pw-list">
              {projects.map((e, i) => (
                <li className="pw__item" key={i}>
                  <div className="pw__dot" />
                  <Card e={e} />
                </li>
              ))}
            </ol>
          </div>

          {/* Right column — Writings */}
          <div className="pw-col right">
            <h4 className="pw__heading">Writings</h4>
            <ol className="pw-list">
              {writings.map((e, i) => (
                <li className="pw__item" key={i}>
                  <div className="pw__dot" />
                  <Card e={e} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </Page>
  )
}
