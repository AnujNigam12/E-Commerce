import React, { useEffect, useState, useContext } from 'react'
import CartContext from '../context/CartContext'

export default function Cart() {
    let ctx = useContext(CartContext);
    console.log(ctx)
    let arr = ctx.cartArr

    let sum = 0
    arr.forEach((ele) => {
        sum = sum + ele.price
    })
    return (
        <div className="py-20">
        {
            arr.length>0?<div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.no.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((ele, index) => {
                                return <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img src={ele.thumbnail} alt="" width={50} />
                                    </td>
                                    <td className="px-6 py-4">
                                        {ele.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='w-8 h-5 bg-gray-200' onClick={() => ctx.btnDecrement(ele, index)}>-</button>
                                        <span className='font-bold text-xl mx-2'>{ele.quantity}</span>
                                        <button className='w-8 h-5 bg-gray-200' onClick={() => ctx.btnIncrement(ele, index)}>+</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        $ {ele.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='px-5 py-1 rounded text-white bg-green-500' onClick={() => { ctx.removeItem(ele, index) }}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-5xl">Total</th>
                            <td className="px-6 py-3 text-4xl">$ {sum}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>:<h1 className='text-center text-4xl'>Please add some item in the cart page</h1>
            }
        </div>
    )
}
