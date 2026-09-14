import { ArrowRight, Globe2, Leaf, ShieldCheck, UsersRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const logoUrl='https://res.cloudinary.com/dwmjz9csc/image/upload/v1789366884/3fe8f148-a5fe-4691-b999-b68f25e84bc2.png'

const categories=[
 {name:'Spices',image:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=85',pos:'node-spices'},
 {name:'Pulses',image:'https://images.unsplash.com/photo-1515543904379-3d757afe72e8?auto=format&fit=crop&w=300&q=85',pos:'node-pulses'},
 {name:'Oil Seeds',image:'https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=300&q=85',pos:'node-oil'},
 {name:'Value Added',image:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=85',pos:'node-value'},
 {name:'Dehydrated',image:'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=300&q=85',pos:'node-dehydrated'},
 {name:'Herbs',image:'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=300&q=85',pos:'node-herbs'},
 {name:'Nuts',image:'https://images.unsplash.com/photo-1599599810694-57a12cbe92a4?auto=format&fit=crop&w=300&q=85',pos:'node-nuts'},
 {name:'Grains',image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=85',pos:'node-grains'},
]

export function Hero(){
 return <section className="hero" id="home">
   <div className="hero-backdrop"/>
   <div className="hero-inner">
     <motion.div className="hero-network" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.75}}>
       <svg className="network-lines" viewBox="0 0 760 620" aria-hidden="true">
         <path d="M380 310L385 100M380 310L570 170M380 310L650 310M380 310L575 465M380 310L380 530M380 310L185 465M380 310L110 310M380 310L190 165" />
       </svg>
       <div className="brand-hub"><div className="brand-hub__ring"><img src={logoUrl} alt="STOCON Bharath Private Limited"/></div></div>
       {categories.map((item,index)=><motion.article key={item.name} className={'category-node '+item.pos} initial={{opacity:0,scale:.65}} animate={{opacity:1,scale:1}} transition={{delay:.15+index*.07,type:'spring',stiffness:110}}>
         <img src={item.image} alt={item.name}/><span>{item.name}</span>
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