import { useEffect, useState } from 'react'

type TypewriterProps={text:string;delay?:number;speed?:number}

export function Typewriter({text,delay=0,speed=55}:TypewriterProps){
 const [value,setValue]=useState('')
 useEffect(()=>{
  setValue('')
  const start=window.setTimeout(()=>{
   let index=0
   const timer=window.setInterval(()=>{index+=1;setValue(text.slice(0,index));if(index>=text.length)window.clearInterval(timer)},speed)
   return()=>window.clearInterval(timer)
  },delay)
  return()=>window.clearTimeout(start)
 },[text,delay,speed])
 return <>{value}<span className="typewriter-caret" aria-hidden="true">|</span></>
}