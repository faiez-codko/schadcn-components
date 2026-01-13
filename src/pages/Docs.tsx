import { useLocation, useNavigate } from 'react-router-dom'
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { Outlet } from 'react-router-dom'

function Docs() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar collapsible="offcanvas" variant="sidebar" className="top-16 h-[calc(100svh-4rem)]">
          <SidebarHeader>
            <Input placeholder="Search documentation..." />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>About</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs' || location.pathname === '/docs/'}
                    onClick={() => navigate('/docs')}
                  >
                    <span>Introduction</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Templates</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/templates/hero')}
                    onClick={() => navigate('/docs/templates/hero')}
                  >
                    <span>Hero</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/templates/hero-variants')}
                    onClick={() => navigate('/docs/templates/hero-variants')}
                  >
                    <span>Hero Variants</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/templates/testimonials')}
                    onClick={() => navigate('/docs/templates/testimonials')}
                  >
                    <span>Testimonials</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/templates/pricing')}
                    onClick={() => navigate('/docs/templates/pricing')}
                  >
                    <span>Pricing</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/templates/footer')}
                    onClick={() => navigate('/docs/templates/footer')}
                  >
                    <span>Footer</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Patterns</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/patterns/cards')}
                    onClick={() => navigate('/docs/patterns/cards')}
                  >
                    <span>Cards</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/patterns/loaders')}
                    onClick={() => navigate('/docs/patterns/loaders')}
                  >
                    <span>Loaders</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/patterns/action-search-bar')}
                    onClick={() => navigate('/docs/patterns/action-search-bar')}
                  >
                    <span>Action Search Bar</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/patterns/slide-text-button')}
                    onClick={() => navigate('/docs/patterns/slide-text-button')}
                  >
                    <span>Slide Text Button</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/patterns/faq')}
                    onClick={() => navigate('/docs/patterns/faq')}
                  >
                    <span>FAQ</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/patterns/magnet-button')}
                    onClick={() => navigate('/docs/patterns/magnet-button')}
                  >
                    <span>Magnet Button</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/patterns/timeline')}
                    onClick={() => navigate('/docs/patterns/timeline')}
                  >
                    <span>Timeline</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/patterns/card-stack'}
                    onClick={() => navigate('/docs/patterns/card-stack')}
                  >
                    <span>Card Stack</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/patterns/calendar-schedule'}
                    onClick={() => navigate('/docs/patterns/calendar-schedule')}
                  >
                    <span>Calendar Schedule</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Components</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/components/button')}
                    onClick={() => navigate('/docs/components/button')}
                  >
                    <span>Button</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/components/header')}
                    onClick={() => navigate('/docs/components/header')}
                  >
                    <span>Header</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/components/text-effects')}
                    onClick={() => navigate('/docs/components/text-effects')}
                  >
                    <span>Text Effects</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname.startsWith('/docs/components/data-table')}
                    onClick={() => navigate('/docs/components/data-table')}
                  >
                    <span>Data Table</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Templates</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/templates/dashboard'}
                    onClick={() => navigate('/docs/templates/dashboard')}
                  >
                    <span>Admin Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/templates/login'}
                    onClick={() => navigate('/docs/templates/login')}
                  >
                    <span>Login Forms</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/templates/product-page'}
                    onClick={() => navigate('/docs/templates/product-page')}
                  >
                    <span>Product Page</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/templates/shop-list'}
                    onClick={() => navigate('/docs/templates/shop-list')}
                  >
                    <span>Shop List</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/templates/profile'}
                    onClick={() => navigate('/docs/templates/profile')}
                  >
                    <span>User Profile</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={location.pathname === '/docs/templates/kanban'}
                    onClick={() => navigate('/docs/templates/kanban')}
                  >
                    <span>Kanban Board</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
          <Outlet />
      
      </div>
    </SidebarProvider>
  )
}

export default Docs
