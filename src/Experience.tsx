import Page from "./Page"
import Section from "./Section"

type Item = {
  title: string
  org: string
  dates: string
  bullets: string[]
}

// Replace these two arrays in Experience.tsx

const professional: Item[] = [
  {
    title: "Software Developer",
    org: "We CLEAN Inc",
    dates: "Feb 2025 – Jul 2025",
    bullets: [
      "Oversaw the design, development, and optimization of digital platforms to expand online presence.",
      "Led technical projects and mentored team members to foster collaboration and growth.",
      "Delivered UX improvements and performance optimizations that increased engagement."
    ],
  },
  {
    title: "AI Trainer",
    org: "DataAnnotation",
    dates: "Feb 2025 – Jul 2025",
    bullets: [
      "Trained and evaluated AI systems across coding and general reasoning tasks.",
      "Wrote/reviewed Python, HTML, and JavaScript to assess model outputs and improve correctness.",
      "Created high-quality prompts, labels, and structured feedback to guide model improvements."
    ],
  },
  // keep or reorder your previous professional roles below
  {
    title: "Instructor",
    org: "Python Tutor",
    dates: "May 2024 – Aug 2024",
    bullets: [
      "Taught foundational Python (loops, functions) via hands-on projects.",
      "Built approachable materials to grow long-term coding confidence.",
    ],
  },
  {
    title: "Intern",
    org: "Data Systems Analyst, Weinstein Jewelers",
    dates: "Jun 2022 – Jun 2024",
    bullets: [
      "Built dashboards/reports to identify customer trends.",
      "Supported targeted marketing and inventory decisions.",
    ],
  },
]

const ventures: Item[] = [
  {
    title: "Vice President",
    org: "MSU Entrepreneurship Association",
    dates: "Sep 2025 – Present",
    bullets: [
      "Lead initiatives expanding MSU’s entrepreneurial ecosystem.",
      "Support student founders via mentorship, workshops, and networking.",
    ],
  },
  {
    title: "Founder",
    org: "Sprout — Trading & Portfolio Platform",
    dates: "May 2025 – Present",
    bullets: [
      "Full-stack platform: FastAPI, PostgreSQL, Docker, React, JWT.",
      "Real-time market data + analytics for financial literacy.",
      "Dashboards and secure APIs for actionable insights.",
    ],
  },
  {
    title: "Owner",
    org: "E-Commerce",
    dates: "Jan 2022 – Present",
    bullets: [
      "Sourcing/importing with international suppliers; contracts & logistics.",
      "Scaled to six-figure revenue in year one through disciplined ops.",
    ],
  },
  {
    title: "Owner",
    org: "Web Development",
    dates: "Jan 2025 – Present",
    bullets: [
      "Deliver custom websites and web apps for local clients using modern stacks (React, TypeScript).",
      "Own end-to-end delivery: discovery, design, build, deploy (Vercel/Netlify), SEO, analytics.",
      "Manage client relationships, proposals, and maintenance SLAs."
    ],
  },
]



function XpCard({ item }: { item: Item }) {
  return (
    <div className="xp__card">
      <div className="xp__row">
        <h3 className="xp__title">{item.title}</h3>
        <span className="xp__dates">{item.dates}</span>
      </div>
      <div className="xp__org">{item.org}</div>
      <ul className="xp__bullets">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <Page>
      <Section title="Experience" subtitle="Professional • Entrepreneurial">
        <div className="xp2">
          {/* Left column — Professional */}
          <div className="xp-col left">
            <h4 className="xp__heading">Professional</h4>
            <ol className="xp-list">
              {professional.map((it, idx) => (
                <li key={idx} className="xp__item">
                  <div className="xp__dot" />
                  <XpCard item={it} />
                </li>
              ))}
            </ol>
          </div>

          {/* Right column — Ventures */}
          <div className="xp-col right">
            <h4 className="xp__heading">Entrepreneurial</h4>
            <ol className="xp-list">
              {ventures.map((it, idx) => (
                <li key={idx} className="xp__item">
                  <div className="xp__dot" />
                  <XpCard item={it} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </Page>
  )
}
