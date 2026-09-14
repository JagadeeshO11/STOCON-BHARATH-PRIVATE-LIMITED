import { motion } from 'framer-motion'

type Props={label:string;prefix:string;typed:string;description:string}

export function AnimatedPageHero({label,prefix,typed,description}:Props){
 return <div className="animated-page-hero">
  <motion.span initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="section-label">{label}</motion.span>
  <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.12}}>{prefix} <em>{typed}</em></motion.h1>
  <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.25}}>{description}</motion.p>
 </div>
}