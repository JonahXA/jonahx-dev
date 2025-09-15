// src/Page.tsx
import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function Page({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ maxWidth: 960, margin: "0 auto", padding: "2rem" }}
    >
      {children}
    </motion.div>
  )
}
