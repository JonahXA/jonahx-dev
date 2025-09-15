import Page from "./Page"
import Section from "./Section"

export default function About() {
  return (
    <Page>
      <Section>
        <div className="hero">
  <h1 className="hero__title">Jonah Alsfasser</h1>
  <p className="hero__subtitle">
    Computational Data Science & Wealth Management @ MSU — building practical software, solving real problems.
  </p>

  <div className="hero__grid">
            {/* Left: quick facts (edit these freely) */}
            <dl className="kv">
              <dt>Based</dt>
              <dd>Detroit, MI </dd>

              <dt>Email</dt>
              <dd>jonahcalsfasser@gmail.com</dd>

              <dt>Focus</dt>
              <dd>Full-Stack Dev, Financial Systems, Portfolio Analysis, Data Visualization, Venture Building</dd>

              <dt>Currently</dt>
              <dd>Developing, Leading, Innovating</dd>
            </dl>

            {/* Right: short blurb */}
            <div>
              <p>
                Passionate about building data-driven solutions at the intersection of technology and finance, turning complex systems into practical tools that empower decision-making, unlock opportunities, and fuel entrepreneurial innovation.
              </p>
              <div className="chips" aria-label="Tech stack">
                <span className="chip">Python</span>
                <span className="chip">Automation</span>
                <span className="chip">Cloud</span>
                <span className="chip">HTML</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="{ Recent Ventures }"
        subtitle="What I've been up to lately"
      >
        <div className="section__body">
          <ul>
            <li>Vice President of MSU'S Entrepreneurship Association</li>
            <li>Internship Hunting</li>
            <li>
  Building <a href="#/sprout">Sprout</a>
</li>

          </ul>
        </div>
      </Section>
    </Page>
  )
}
