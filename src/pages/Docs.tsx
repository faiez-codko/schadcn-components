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
        <Sidebar collapsible="offcanvas" variant="sidebar" className="top-16">
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
