import './AnnouncementTicker.css'

const categories = [
  'FOOD PRODUCTS',
  'FRESH FRUITS',
  'VEGETABLES',
  'INDIAN SPICES',
  'GLOBAL EXPORT',
]

export function AnnouncementTicker() {
  return (
    <div className="ticker" aria-label="Product categories">
      <div className="ticker__track">
        {categories.map((category) => (
          <span key={category}>{category} <i>✦</i></span>
        ))}
        {categories.map((category) => (
          <span key={'repeat-' + category} aria-hidden="true">{category} <i>✦</i></span>
        ))}
      </div>
    </div>
  )
}
