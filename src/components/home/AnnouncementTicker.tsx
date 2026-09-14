import './AnnouncementTicker.css'

const categories=['FOOD PRODUCTS','FRESH FRUITS','VEGETABLES','INDIAN SPICES','GLOBAL EXPORT','QUALITY ASSURED']

export function AnnouncementTicker(){
 const items=[...categories,...categories,...categories]
 return <section className="ticker-wrap" aria-label="Company highlights">
  <div className="ticker">
   <div className="ticker__track">
    {items.map((category,index)=><span className="ticker__item" key={index}>{category}<b>✦</b></span>)}
    {items.map((category,index)=><span className="ticker__item" key={'copy-'+index} aria-hidden="true">{category}<b>✦</b></span>)}
   </div>
  </div>
 </section>
}