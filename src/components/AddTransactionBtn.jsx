import React, { useState } from 'react'

const AddTransactionBtn = ({ handleShowModal }) => {
  return (
    <button onClick={handleShowModal} className='bg-blue-600 p-2 rounded-md text-white font-semibold fixed bottom-5 right-5 cursor-pointer hover:bg-blue-800'>
        Add Transaction
    </button>
  )
}

export default AddTransactionBtn