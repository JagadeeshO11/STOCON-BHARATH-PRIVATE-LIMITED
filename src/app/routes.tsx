import { Navigate, Route, Routes } from 'react-router-dom'
import { PageTransition } from '../components/layout/PageTransition'
import { About } from '../pages/About/About'
import { ExportServices } from '../pages/ExportServices/ExportServices'
import { HomePage } from '../pages/Home/HomePage'
import { Products } from '../pages/Products/Products'
import { Quality } from '../pages/Quality/Quality'

export function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/export-services" element={<ExportServices />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageTransition>
  )
}
