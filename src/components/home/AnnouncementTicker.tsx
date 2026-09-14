import './AnnouncementTicker.css'

const categories = ['FOOD PRODUCTS','FRESH FRUITS','VEGETABLES','INDIAN SPICES','GLOBAL EXPORT']

function TickerGroup({hidden=false}:{hidden?:boolean}){
 return <div className="ticker__group" aria-hidden={hidden}>
  {categories.map((category)=><span key={category}>{category}<i>✦</i></span>)}
 </div>
}

export function AnnouncementTicker(){
 return <div className="ticker" aria-label="Product categories">
  <div className="ticker__viewport">
   <div className="ticker__track">
    <TickerGroup/>
    <TickerGroup hidden/>
   </div>
  </div>
 </div>
}