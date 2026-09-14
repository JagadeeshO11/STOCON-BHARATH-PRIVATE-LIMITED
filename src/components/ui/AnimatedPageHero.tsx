import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props={label:string;prefix:string;typed:string;description:string}

export function AnimatedPageHero({label,prefix,typed,description}:Props){
 const [value,setValue]=useState('')

 useEffect(()=>{
  let index=0
  let timer:number|undefined
  const start=window.setTimeout(()=>{
   timer=window.setInterval(()=>{
    index+=1
    setValue(typed.slice(0,index))
    if(index>=typed.length && timer) window.clearInterval(timer)
   },55)
  },500)
  return()=>{window.clearTimeout(start);if(timer)window.clearInterval(timer)}
 },[typed])

 return <div className="animated-page-hero">
  <motion.span initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="section-label">{label}</motion.span>
  <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.12}}>
   {prefix}{' '}
   <em className="typewriter-word" aria-label={typed}>
    <span className="typewriter-slot">{value}</span><span className="typewriter-caret" aria-hidden="true">|</span>
   </em>
  </motion.h1>
  <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.25}}>{description}</motion.p>
 </div>
}