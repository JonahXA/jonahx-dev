import type { PropsWithChildren, ReactNode } from "react"

type Props = PropsWithChildren<{
  title?: string
  subtitle?: ReactNode
}>

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="section">
      {title ? (
        <header className="section__header">
          <h2 className="section__title">{title}</h2>
          {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
          <div className="section__rule" />
        </header>
      ) : null}
      <div className="section__body">{children}</div>
    </section>
  )
}
