import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt2975590', label: 'Batman' },
  { to: '/signin', label: 'Sign In' }
]

export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-2">
        {navigations.map(nav => {
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              end
              className={({ isActive }) => {
                return isActive ? 'text-red-500' : 'text-black'
              }}>
              {nav.label}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
}
