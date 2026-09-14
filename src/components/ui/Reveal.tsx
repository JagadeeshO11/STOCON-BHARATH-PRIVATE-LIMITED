import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
type Props={children:ReactNode;delay?:number;className?:string}
export function Reveal({children,delay=0,className}:Props){return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.55,delay}}>{children}</motion.div>}