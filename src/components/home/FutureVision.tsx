import { Snowflake, Ship } from 'lucide-react'
import { motion } from 'framer-motion'
import './FutureVision.css'

export function FutureVision() {
  return (
    <section className="future-vision">
      <div className="section future-vision__inner">
        <div>
          <div className="section-label">04 / FUTURE DIRECTION</div>
          <h2>Growing the portfolio for <em>what comes next.</em></h2>
        </div>

        <div className="future-vision__card">
          <span className="future-vision__icons">
            <Snowflake size={22} />
            <Ship size={22} />
          </span>
          <h3>Frozen seafood export</h3>
          <p>
            In the future, STOCON plans to expand its export portfolio into seafood supplied
            in frozen condition, alongside its existing food and agricultural product focus.
          </p>
        </div>
      </div>
    </section>
  )
}
