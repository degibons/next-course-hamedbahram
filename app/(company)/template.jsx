'use client'

import { motion } from 'framer-motion'
import NavLink from '@/components/ui/NavLink'

const CompanyLayout = ({ children }) => {
  return (
    <section className="pt-6">
      <div className="container flex">
        <div className="overflow-y-auto border-r border-gray-200 pr-6">
          <nav className="flex flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <NavLink href="/about">About</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <NavLink href="/team">Team</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <NavLink href="/contact">Contact</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <NavLink href="/join">Join</NavLink>
              </motion.li>
            </ul>
          </nav>
        </div>

        <main className="ml-6 grow">{children}</main>
      </div>
    </section>
  )
}

export default CompanyLayout
