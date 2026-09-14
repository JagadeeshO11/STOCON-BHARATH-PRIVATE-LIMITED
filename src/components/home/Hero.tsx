import { ArrowRight, Globe2, Leaf, ShieldCheck, UsersRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const logoUrl='https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'

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
   <div className="hero-backdrop"/>
   <div className="hero-inner">
     <motion.div className="hero-network" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.75}}>
       <svg className="network-lines" viewBox="0 0 760 620" aria-hidden="true">
         <path className="orbit" d="M380 88L590 208L590 412L380 532L170 412L170 208Z"/>
         <path className="spokes" d="M380 310L380 88M380 310L590 208M380 310L590 412M380 310L380 532M380 310L170 412M380 310L170 208"/>
         <circle cx="380" cy="88" r="7"/><circle cx="590" cy="208" r="7"/><circle cx="590" cy="412" r="7"/>
         <circle cx="380" cy="532" r="7"/><circle cx="170" cy="412" r="7"/><circle cx="170" cy="208" r="7"/>
       </svg>
       <div className="brand-hub"><div className="brand-hub__ring"><img className="brand-hub__logo" src={logoUrl.replace('/upload/','/upload/e_make_transparent:12/')} alt="STOCON Bharath Private Limited"/></div></div>
       {categories.map((item,index)=><motion.article key={item.name} className={'category-node '+item.pos} initial={{opacity:0,scale:.65}} animate={{opacity:1,scale:1}} transition={{delay:.15+index*.07,type:'spring',stiffness:110}}>
         <img src={item.image} alt={item.name} loading="eager" onError={(e)=>{e.currentTarget.src='https://res.cloudinary.com/znbhjevm/image/upload/v1789375073/spices.jpg'}}/><span>{item.name}</span>
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
     <div><UsersRound/><span><strong>Sustainable Growth</strong><small>For a better tomorrow</small></span></div>
   </div>
 </section>
}