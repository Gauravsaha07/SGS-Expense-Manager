import { SquarePen, Trash } from 'lucide-react'
import React from 'react'

const ListItem = ({ transaction , removeTransaction , editTransaction }) => {
    return (
        <li className='relative my-2 border border-gray-200 p-4 rounded-lg'>
            <p className='text-sm text-gray-300 my-2'>#id: {transaction.id}</p>
            <h1 className='text-4xl font-black my-2'>{transaction.amount}</h1>
            <h2 className='text-lg font-semibold'>{transaction.text}</h2>

            <div className='absolute top-5 right-5'>
              <button onClick={() => editTransaction(transaction)} className='mx-2 cursor-pointer'><SquarePen /></button>
              <button onClick={() => removeTransaction(transaction.id)} className='cursor-pointer mx-2'><Trash /></button>
            </div>

        </li>
    )
}

export default ListItem
