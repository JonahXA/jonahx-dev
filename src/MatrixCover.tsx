import { useEffect, useRef, useState } from "react"

type Props = {
  onEnter: () => void
  fadeOut?: boolean
}

export default function MatrixCover({ onEnter, fadeOut }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // ===== Typewriter state =====
  const fullText = "ACCESS: JONAH X MAINFRAME"
  const [typed, setTyped] = useState("")

  useEffect(() => {
    // Typewriter: reveal 1 char every ~45–65ms after a short delay
    let i = 0
    let cancelled = false

    const tick = () => {
      if (cancelled) return
      setTyped(fullText.slice(0, i + 1))
      i++
      if (i < fullText.length) {
        const jitter = 45 + Math.random() * 20
        setTimeout(tick, jitter)
      }
    }

    const start = setTimeout(tick, 250)

    return () => {
      cancelled = true
      clearTimeout(start)
    }
  }, [])

  // ===== Matrix rain effect =====
  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      recomputeColumns()
    }

    // ==== TUNABLES ====
    const fontSize = 16                // character size in px (smaller = more columns)
    const density = 1.6                // columns multiplier (1.0 = default; try 1.4–2.2)
    const streamsPerColumn = 2         // spawn multiple “drops” per column (1–3)
    const fallSpeed = 175              // pixels per second
    const trailAlpha = 0.07            // 0.04–0.10 (lower = longer trail, looks denser)
    const chars =
      "アァカサタナハマヤャラワ0123456789abcdefghijklmnopqrstuvwxyz"

    // columns & positions
    let columns = 0
    let positions: number[] = []

    const recomputeColumns = () => {
      columns = Math.max(1, Math.floor((canvas.width / fontSize) * density))
      const totalStreams = columns * streamsPerColumn
      positions = new Array(totalStreams)
        .fill(0)
        .map(() => Math.random() * canvas.height)
    }

    resize()
    window.addEventListener("resize", resize)

    let last = performance.now()
    let raf = 0

    const draw = (t: number) => {
      const dt = (t - last) / 1000 // seconds
      last = t

      // subtle trail overlay
      ctx.fillStyle = `rgba(0, 0, 0, ${trailAlpha})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff41"
      ctx.font = `${fontSize}px "Share Tech Mono", monospace`

      // Recompute if width changed significantly (handled on resize too)
      const expectedColumns = Math.max(
        1,
        Math.floor((canvas.width / fontSize) * density)
      )
      if (expectedColumns !== columns) {
        recomputeColumns()
      }

      for (let i = 0; i < positions.length; i++) {
        // map stream index to its column
        const col = i % columns
        const x = col * fontSize
        const y = positions[i]

        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, x, y)

        positions[i] += fallSpeed * dt

        // random reset after passing bottom (staggered)
        if (positions[i] > canvas.height && Math.random() > 0.975) {
          positions[i] = 0
        }
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame((t) => {
      last = t
      draw(t)
    })

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      document.body.style.overflow = originalOverflow
    }
  }, [])

  // Keyboard enter
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") onEnter()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onEnter])

  return (
    <div className={`matrix-cover${fadeOut ? " fade-out" : ""}`}>
      <canvas ref={canvasRef} />
      <button
        className="enter-btn"
        onClick={onEnter}
        aria-label="Access Jonah X Mainframe"
        aria-live="polite"
      >
        {typed}
        {typed.length < fullText.length ? (
          <span className="caret" aria-hidden="true">▌</span>
        ) : null}
      </button>
    </div>
  )
}
