import { BanknoteArrowDown, BanknoteArrowUp, WalletMinimal } from 'lucide-react'
import React from 'react'

export const Dashboard = ({ transactions }) => {


    let income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    let expense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    let balance = transactions
        .reduce((acc, transaction) => acc + transaction.amount, 0)


    return (
        <div className='my-4 grid gap-4 grid-cols-1 md:grid-cols-3'>
            <div className='shadow-sm p-4 rounded-lg border border-gray-100 flex items-center justify-between'>
                <div>
                    <p className='text-lg'>Total Income</p>
                    <h1 className='text-4xl font-bold my-2'>₹{income}</h1>
                </div>
                <div>
                    <BanknoteArrowUp size={"100px"} color='green' opacity={"0.8"} />
                </div>
            </div>
            <div className='shadow-sm p-4 rounded-lg border border-gray-100 flex items-center justify-between'>
                <div>
                    <p className='text-lg'>Total Expense</p>
                    <h1 className='text-4xl font-bold my-2'>₹{expense}</h1>
                </div>
                <div>
                    <BanknoteArrowDown size={"100px"} color='red' opacity={"0.8"} />
                </div>
            </div>
            <div className='shadow-sm p-4 rounded-lg border border-gray-100 flex items-center justify-between'>
                <div>
                    <p className='text-lg'>Remaining Balance</p>
                    <h1 className='text-4xl font-bold my-2'>₹{balance}</h1>
                </div>
                <div>
                    <WalletMinimal size={"100px"} color='purple' opacity={"0.8"} />
                </div>
            </div>
        </div>
    )
}
