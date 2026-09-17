import { Navigate, Route, Routes } from 'react-router-dom'
import { PageTransition } from '../components/layout/PageTransition'
import { About } from '../pages/About/About'
import { Categories as Products } from '../pages/Categories/Categories'
import { HomePage } from '../pages/Home/HomePage'
import { Contact } from '../pages/Contact/Contact'

export function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageTransition>
  )
}
