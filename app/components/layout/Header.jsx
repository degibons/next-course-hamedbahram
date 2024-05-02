import NavLink from '@/components/ui/NavLink'
import ThemeButton from '@/components/ui/ThemeButton'

const Header = () => {
  return (
    <header className="flex min-h-16 items-center bg-slate-100 dark:border-b dark:border-b-gray-600 dark:bg-black">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-4">
          <li>
            <NavLink href="/" className="text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/posts" className="text-blue-600">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" className="text-blue-600">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/guestbook" className="text-blue-600">
              Guestbook
            </NavLink>
          </li>
        </ul>

        <ThemeButton />
      </nav>
    </header>
  )
}
export default Header
