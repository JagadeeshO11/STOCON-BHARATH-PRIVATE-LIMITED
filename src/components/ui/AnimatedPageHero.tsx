import { motion } from 'framer-motion'
import { Typewriter } from './Typewriter'

type Props = {
  label: string
  prefix: string
  typed: string
  description: string
}

export function AnimatedPageHero({ label, prefix, typed, description }: Props) {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="section-label"
      >
        {label}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        {prefix}{' '}
        <em>
          <Typewriter text={typed} delay={450} />
        </em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
      >
        {description}
      </motion.p>
    </div>
  )
}
