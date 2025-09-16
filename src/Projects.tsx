// src/Projects.tsx
import Page from "./Page"
import Section from "./Section"
import cryptoPdf from "./assets/crypto-research.pdf"           // vite resolves to a URL
import psychoPdf from "./assets/american-psycho-monotony.pdf" // vite resolves to a URL

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
      "Data pipeline in Python (NumPy, Pandas) to compute annualized returns, volatility, Sharpe ratios, and correlations; ran portfolio simulations to compare diversified allocation vs. top-Sharpe selections and visualized outcomes.",
    href: cryptoPdf,
  },
]

const writings: Entry[] = [
  {
    title: "American Psycho — Monotony Analysis",
    date: "September 2025",
    blurb:
      "An essay on how Ellis uses routine and repetition to erode individuality, numb morality, and blur the line between the banal and the horrific.",
    href: psychoPdf,
  },
]

function Card({ e }: { e: Entry }) {
  const TitleTag = e.href ? "a" : "span"
  const titleProps = e.href
    ? { href: e.href, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <div className="pw__card">
      <div className="pw__row">
        <h3 className="pw__title">
          <TitleTag {...(titleProps as any)}>{e.title}</TitleTag>
        </h3>
        <span className="pw__date">{e.date}</span>
      </div>

      <p className="pw__blurb">{e.blurb}</p>

      {e.href ? (
        <p className="pw__links">
          <a href={e.href} target="_blank" rel="noopener noreferrer">
            View document
          </a>
        </p>
      ) : null}
    </div>
  )
}

export default function Projects() {
  return (
    <Page>
      <Section title="Projects & Writings" subtitle="Left: Projects • Right: Writings">
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
