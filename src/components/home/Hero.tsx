import { ArrowRight, Globe2, Leaf, ShieldCheck, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const logoUrl='https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'
const heroVideo='https://res.cloudinary.com/dwmjz9csc/video/upload/v1789390588/now_genrate_the_video_tqrqom.mp4'

const categories=[
 {name:'Spices & Herbs',image:'https://res.cloudinary.com/znbhjevm/image/upload/v1789376285/hero-spices.webp',pos:'node-spices'},
 {name:'Grains & Pulses',image:'https://res.cloudinary.com/znbhjevm/image/upload/v1789376279/hero-grains.webp',pos:'node-grains'},
 {name:'Oil Seeds',image:'https://res.cloudinary.com/znbhjevm/image/upload/v1789376292/hero-oil-seeds.jpg',pos:'node-oil'},
 {name:'Fruits & Vegetables',image:'https://res.cloudinary.com/znbhjevm/image/upload/v1789389015/hero-fresh-fruits-vegetables.png',pos:'node-fruits'},
 {name:'Dehydrated Products',image:'https://res.cloudinary.com/znbhjevm/image/upload/v1789389022/hero-dehydrated-products.jpg',pos:'node-dehydrated'},
 {name:'Processed Foods',image:'https://res.cloudinary.com/znbhjevm/image/upload/v1789389031/hero-processed-foods.jpg',pos:'node-processed'},
]

export function Hero(){
 return <section className="hero" id="home">
   <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
     <source src={heroVideo} type="video/mp4"/>
   </video>
   <div className="hero-video-overlay"/>
   <div className="hero-inner">
     <motion.div className="hero-network" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.75}}>
       <svg className="network-lines" viewBox="0 0 640 640" aria-hidden="true">
         <circle className="orbit orbit-main" cx="320" cy="320" r="230"/>
         <circle className="orbit orbit-inner" cx="320" cy="320" r="128"/>
         <path className="spokes" d="M320 320L320 90M320 320L519.2 205M320 320L519.2 435M320 320L320 550M320 320L120.8 435M320 320L120.8 205"/>
         <circle className="connector" cx="320" cy="90" r="6"/>
         <circle className="connector" cx="519.2" cy="205" r="6"/>
         <circle className="connector" cx="519.2" cy="435" r="6"/>
         <circle className="connector" cx="320" cy="550" r="6"/>
         <circle className="connector" cx="120.8" cy="435" r="6"/>
         <circle className="connector" cx="120.8" cy="205" r="6"/>
       </svg>

       <div className="brand-hub">
         <div className="brand-hub__ring">
           <img className="brand-hub__logo" src={logoUrl} alt="STOCON Bharath Private Limited"/>
         </div>
       </div>

       {categories.map((item,index)=><motion.article key={item.name} className={'category-node '+item.pos} initial={{opacity:0,scale:.65}} animate={{opacity:1,scale:1}} transition={{delay:.15+index*.07,type:'spring',stiffness:110}}>
         <img src={item.image} alt={item.name} loading="eager"/>
         <span>{item.name}</span>
       </motion.article>)}
     </motion.div>

     <motion.div className="hero-copy" initial={{opacity:0,x:26}} animate={{opacity:1,x:0}} transition={{duration:.65,delay:.18}}>
       <div className="eyebrow"><span/>INDIA · GLOBAL EXPORT PARTNER</div>
       <h1>Sourcing the Best.<br/>Supplying a <em>Healthier Tomorrow.</em></h1>
       <p>Quality Indian agricultural products sourced with care and supplied to customers and partners across international markets.</p>
       <div className="hero-actions"><Link className="primary-btn" to="/products">Explore Our Products <ArrowRight size={18}/></Link></div>
     </motion.div>
   </div>

   <div className="hero-features">
     <div><Globe2/><span><strong>Global Reach</strong><small>Exporting to global markets</small></span></div>
     <div><Leaf/><span><strong>Pure & Natural</strong><small>Premium quality products</small></span></div>
     <div><ShieldCheck/><span><strong>Trusted Partner</strong><small>Reliable export solutions</small></span></div>
     <div><Sprout/><span><strong>Sustainable Growth</strong><small>For a better tomorrow</small></span></div>
   </div>
 </section>
}