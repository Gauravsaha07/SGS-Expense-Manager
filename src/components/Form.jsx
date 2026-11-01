import React, { useEffect, useState } from 'react'

const Form = ({ showModal, handleShowModal, addTransaction, edit , updateTransaction }) => {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        !edit.isEdit ?
        addTransaction({ id: crypto.randomUUID(), text, amount: parseInt(amount) }) :
        updateTransaction({ id : edit.transaction.id , text , amount : parseInt(amount) })

        setText("")
        setAmount("")

        handleShowModal()

    }

    useEffect(() => {
        setAmount(edit.transaction.amount)
        setText(edit.transaction.text)
    }, [edit])

    return (
        <div className={showModal ? "fixed z-40 p-8 left-0 bg-white w-full border border-gray-200 shadow-xl" : "hidden"}>
            <h1 className='my-4 text-center font-semibold text-xl'>Enter Your Transaction Details</h1>
            <form onSubmit={handleSubmit}>
                <input required value={amount} onChange={(e) => setAmount(e.target.value)} className='border border-gray-300 p-2 rounded-lg w-full my-2' type="number" placeholder='Enter Amount' />
                <textarea required value={text} onChange={(e) => setText(e.target.value)} className='border border-gray-300 p-2 rounded-lg w-full my-2' placeholder='Enter Transaction Details'></textarea>
                <button type='submit' className='bg-blue-600 text-white font-semibold cursor-pointer w-full p-2 rounded-md hover:bg-blue-800'>Save Transaction</button>
                <button type='button' onClick={handleShowModal} className='bg-red-600 text-white my-2 font-semibold cursor-pointer w-full p-2 rounded-md hover:bg-red-800'>Cancel Saving Transaction</button>
            </form>
        </div>
    )
}

export default Form