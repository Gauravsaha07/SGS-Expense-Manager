import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({ transactions , removeTransaction , editTransaction }) => {
    return (
        <>
            <h1 className='my-2 text-xl font-bold'>Recent Transactions</h1>
            <ul className='my-4'>
                {
                    transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction} removeTransaction={removeTransaction} editTransaction={editTransaction} />)
                }
            </ul>
        </>
    )
}

export default ListGroup