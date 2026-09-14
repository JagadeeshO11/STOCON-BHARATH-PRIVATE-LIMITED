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

        <motion.div className="future-vision__card" initial={{opacity:0,x:28}} whileInView={{opacity:1,x:0}} viewport={{once:true}} whileHover={{y:-6}}>
          <span className="future-vision__icons">
            <Snowflake size={22} />
            <Ship size={22} />
          </span>
          <h3>Frozen seafood export</h3>
          <p>
            In the future, STOCON plans to expand its export portfolio into seafood supplied
            in frozen condition, alongside its existing food and agricultural product focus.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
