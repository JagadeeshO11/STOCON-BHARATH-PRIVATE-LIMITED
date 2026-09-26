import { BrowserRouter } from 'react-router-dom'
import { BottomNav } from './components/layout/BottomNav'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { WhatsAppFloat } from './components/layout/WhatsAppFloat'
import { PhoneFloat } from './components/layout/PhoneFloat'
import { BrochureFloat } from './components/layout/BrochureFloat'
import { AppRoutes } from './app/routes'

function App(){
  return (
    <BrowserRouter>
      <Header/>
      <main><AppRoutes/></main>
      <Footer/>
      <BrochureFloat/>
      <PhoneFloat/>
      <WhatsAppFloat/>
      <BottomNav/>
    </BrowserRouter>
  )
}
export default App