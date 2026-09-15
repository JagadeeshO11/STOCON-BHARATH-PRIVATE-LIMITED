import { motion } from 'framer-motion'

type Props={label:string;prefix:string;typed:string;description:string}

export function AnimatedPageHero({label,prefix,typed,description}:Props){
 const heading = `${prefix} ${typed}`
 const words = heading.trim().split(/\s+/)
 const midpoint = Math.ceil(words.length / 2)
 const lineOne = words.slice(0, midpoint).join(' ')
 const lineTwo = words.slice(midpoint).join(' ')

 return <div className="animated-page-hero"><motion.span initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="section-label">{label}</motion.span><motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.12}} className="page-hero-heading"><span>{lineOne}</span><span className="page-hero-heading__accent">{lineTwo}</span></motion.h1><motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.25}}>{description}</motion.p></div>
}
