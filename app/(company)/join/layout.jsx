import NavLink from '@/app/components/ui/NavLink'

const layout = ({ children, team, dashboard }) => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-6">
        <li>
          <NavLink href="/join">Home</NavLink>
        </li>
        <li>
          <NavLink href="/join/settings">Settings</NavLink>
        </li>
      </ul>
      <section className="py-6">{children}</section>
      <section className="flex gap-6">
        {team}
        {dashboard}
      </section>
    </div>
  )
}
export default layout
