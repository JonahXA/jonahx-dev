// src/Resume.tsx
import Page from "./Page"
import Section from "./Section"

const PDF_PATH = "/JONAHS%20RESUME%20SEPT.pdf"  // file is in /public


export default function Resume() {
  return (
    <Page>
      <Section title="Resume" subtitle="View or download my resume">
        <p style={{ marginBottom: "0.75rem" }}>
          <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">📄 Download PDF</a>
        </p>

        <div style={{ width: "100%", height: "82vh", border: "1px solid rgba(0,255,65,0.22)" }}>
          <object data={PDF_PATH} type="application/pdf" width="100%" height="100%">
            <iframe src={PDF_PATH} title="Resume PDF" style={{ width: "100%", height: "100%", border: "none" }} />
          </object>
        </div>
      </Section>
    </Page>
  )
}
