import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Docs from './pages/Docs'
import Gallery from './pages/Gallery'
import Introduction from './pages/docs/Introduction'
import HeroTemplate from './pages/docs/HeroTemplate'
import ButtonDoc from './pages/docs/ButtonDoc'
import HeaderDoc from './pages/docs/HeaderDoc'
import HeroVariantsDoc from './pages/docs/HeroVariantsDoc'
import TestimonialsDoc from './pages/docs/TestimonialsDoc'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import PricingDoc from './pages/docs/PricingDoc'

function NotFound() {
  return <p>Page not found</p>
}

function App() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex gap-4">
            <Link to="/">Landing</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/components">Components</Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
      <div className="pt-16 px-6">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/docs" element={<Docs />}>
            <Route index element={<Introduction />} />
            <Route path="templates/hero" element={<HeroTemplate />} />
            <Route path="templates/hero-variants" element={<HeroVariantsDoc />} />
            <Route path="templates/testimonials" element={<TestimonialsDoc />} />
            <Route path="templates/pricing" element={<PricingDoc />} />
            <Route path="components/button" element={<ButtonDoc />} />
            <Route path="components/header" element={<HeaderDoc />} />
          </Route>
          <Route path="/components" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
