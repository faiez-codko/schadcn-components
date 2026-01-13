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
import FooterDoc from './pages/docs/FooterDoc'
import TextEffectsDoc from './pages/docs/TextEffectsDoc'
import CardsDoc from './pages/docs/CardsDoc'
import LoadersDoc from './pages/docs/LoadersDoc'
import ActionSearchBarDoc from './pages/docs/ActionSearchBarDoc'
import SlideTextButtonDoc from './pages/docs/SlideTextButtonDoc'
import FAQDoc from './pages/docs/FAQDoc'
import MagnetButtonDoc from './pages/docs/MagnetButtonDoc'
import TimelineDoc from './pages/docs/TimelineDoc'
import DashboardTemplateDoc from './pages/docs/DashboardTemplateDoc'
import CardStackDoc from './pages/docs/CardStackDoc'
import LoginTemplateDoc from './pages/docs/LoginTemplateDoc'
import ProductPageDoc from './pages/docs/ProductPageDoc'
import ShopListDoc from './pages/docs/ShopListDoc'
import ProfileTemplateDoc from './pages/docs/ProfileTemplateDoc'
import CalendarScheduleDoc from './pages/docs/CalendarScheduleDoc'
import DataTableDoc from './pages/docs/DataTableDoc'

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
            <Route path="templates/footer" element={<FooterDoc />} />
            <Route path="patterns/cards" element={<CardsDoc />} />
            <Route path="patterns/loaders" element={<LoadersDoc />} />
            <Route path="patterns/action-search-bar" element={<ActionSearchBarDoc />} />
            <Route path="patterns/slide-text-button" element={<SlideTextButtonDoc />} />
            <Route path="patterns/faq" element={<FAQDoc />} />
            <Route path="patterns/magnet-button" element={<MagnetButtonDoc />} />
            <Route path="patterns/timeline" element={<TimelineDoc />} />
            <Route path="patterns/card-stack" element={<CardStackDoc />} />
            <Route path="patterns/calendar-schedule" element={<CalendarScheduleDoc />} />
            
            <Route path="templates/dashboard" element={<DashboardTemplateDoc />} />
            <Route path="templates/login" element={<LoginTemplateDoc />} />
            <Route path="templates/product-page" element={<ProductPageDoc />} />
            <Route path="templates/shop-list" element={<ShopListDoc />} />
            <Route path="templates/profile" element={<ProfileTemplateDoc />} />

            <Route path="components/button" element={<ButtonDoc />} />
            <Route path="components/header" element={<HeaderDoc />} />
            <Route path="components/text-effects" element={<TextEffectsDoc />} />
            <Route path="components/data-table" element={<DataTableDoc />} />
          </Route>
          <Route path="/components" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
