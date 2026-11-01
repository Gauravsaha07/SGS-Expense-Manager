import React from 'react'
import Navbar from './components/Navbar'
import { Dashboard } from './components/Dashboard'
import ListGroup from './components/ListGroup'
import AddTransactionBtn from './components/AddTransactionBtn'
import { useState } from 'react'
import Form from './components/Form'

const App = () => {

  const [transactions, setTransactions] = useState([])

  const [showModal, setShowModal] = useState(false)

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false
  })

  const handleShowModal = () => {
    setShowModal(showModal ? false : true)
  }

  const removeTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions])
  }

  const editTransaction = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true
    })

    handleShowModal()

  }

  const updateTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(transaction => transaction.id === updatedTransaction.id ? updatedTransaction : transaction))
    setEdit({ transaction: {}, isEdit: false })
  }

  return (
    <>
      <Navbar />
      <div className="p-8">

        <Form showModal={showModal} handleShowModal={handleShowModal} addTransaction={addTransaction} edit={edit} updateTransaction={updateTransaction} />

        <h1 className='text-4xl font-bold'>Financial Overview</h1>
        <p className='text-lg my-3'>Curating Your Wealth Through Intentional Tracking. </p>

        <Dashboard transactions={transactions} />

        <ListGroup transactions={transactions} removeTransaction={removeTransaction} editTransaction={editTransaction} />

        <AddTransactionBtn handleShowModal={handleShowModal} />

      </div>
    </>
  )
}

export default App
