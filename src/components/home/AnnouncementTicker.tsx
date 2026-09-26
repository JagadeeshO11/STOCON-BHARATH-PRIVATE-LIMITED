import './AnnouncementTicker.css'

const categories=['FRESH FRUITS','FRESH VEGETABLES','EXPORT QUALITY','GCC & EUROPE SHIPMENTS','DIRECT FARM SOURCING','COLD CHAIN LOGISTICS']

function TickerGroup({copy=false}:{copy?:boolean}){
 return <div className="ticker__group" aria-hidden={copy}>
  {categories.map((category)=><span className="ticker__item" key={category}>{category}<b>✦</b></span>)}
 </div>
}

export function AnnouncementTicker(){
 return <section className="ticker-wrap" aria-label="Company highlights">
  <div className="ticker">
   <div className="ticker__track">
    <TickerGroup/>
    <TickerGroup copy/>
   </div>
  </div>
 </section>
}