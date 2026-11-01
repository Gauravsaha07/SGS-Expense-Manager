import { UserRound } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-2.5 px-8 flex items-center justify-between shadow-sm'>
      <h1 className='text-xl font-bold'>SGS Expense Manager</h1>
      <div className='bg-gray-200 p-2 rounded-full'>
        <UserRound />
      </div>
    </nav>
  )
}

export default Navbar
