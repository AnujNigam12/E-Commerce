import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'antd';
import CartContext from '../context/CartContext'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
    let ctx = useContext(CartContext);
    console.log(ctx)

    let search = ctx.search

    const [products, setproducts] = useState([])
    console.log(products);

    const [loading, setLoading] = useState(false)
    async function getAllData() {
        setLoading(true)
        let res = await fetch('https://dummyjson.com/products?limit=0&skip=0');
        let data = await res.json();
        console.log(data);
        console.log(data.products);
        setLoading(false)
        setproducts(data.products)
    }
    useEffect(() => {
        getAllData()
    }, [])


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedObj, setSelectedObj] = useState('')

    const showModal = (ans) => {
        setIsModalOpen(true);
        setSelectedObj(ans)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    let filterArr = products.filter((ele) => ele.title.toLowerCase().includes(search) || ele.brand?.toLowerCase().includes(search) || ele.category.toLowerCase().includes(search))
    console.log(filterArr)

    // ******************* Pagination code starts ********************

    const [currentPage, setcurrentPage] = useState(1)
    let itemPerPage = 12
    let lastIndex = currentPage * itemPerPage
    let firstIndex = lastIndex - itemPerPage
    let sliceArr = filterArr.slice(firstIndex, lastIndex)
    console.log(sliceArr)

    let noOfButton = Math.ceil(filterArr.length / itemPerPage)
    console.log(noOfButton)

    const handleNext = () => {
        if (currentPage < noOfButton) {
            setcurrentPage(currentPage + 1)
        }
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1)
        }
    }

    let btnArr = []
    for (let i = 1; i <= noOfButton; i++) {
        btnArr.push(i)
    }
    console.log(btnArr)

    const handleNumber = (ans) => {
        console.log(ans)
        setcurrentPage(ans)
    }
    // ******************* Pagination code ends ********************

    return (
        <div>

        <div className='w-[80%] grid grid-cols-12 gap-4'>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton count={3} />
    </p>
  </SkeletonTheme>
        </div>
            
            {loading === true ? <img className="py-16 px-96" src='https://i.pinimg.com/originals/74/c8/bb/74c8bb2bff399628617051db8522a57f.gif'/> : <div>
                <div className='grid grid-cols-12 gap-2 p-5 sticky mx-10 py-20'>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={700}>

                        <div className='flex gap-3 md:flex-row flex-col' >
                            <img src={selectedObj.thumbnail} alt="" />
                            <div>
                                <h1 className='text-2xl mb-3'>{selectedObj.title}</h1>
                                {selectedObj.brand && <h3 className='text-xl'><b>Brand : </b>{selectedObj.brand}</h3>}
                                <h5 className='text-xl mb-3'><b>Category : </b>{selectedObj.category}</h5>
                                <p className='mb-3'>{selectedObj.description}</p>
                                <p><b>$</b> {selectedObj.price}</p>
                                <p><b>Discount</b> : {selectedObj.discountPercentage} %</p>
                                <Link to="/cart" style={{ margin: '20px 0' }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg- focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add to Cart
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-center'>Review</h3>
                            <div className='grid grid-cols-12'>
                                {selectedObj?.reviews?.map((ele) => {
                                    return <div className='bg-orange-400 md:col-span-4 sm:col-span-6 col-span-12 p-6 rounded-lg mx-2' >
                                        <p>{ele.reviewerName}</p>
                                        <p>{ele.rating}</p>
                                        <p>{ele.comment}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </Modal>
                    {
                        sliceArr.map((ele) => {
                            return <div className="relative lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 max-w-sm bg-yellow-600 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => showModal(ele)}>
                                <img className="rounded-t-lg" src={ele.thumbnail} alt />

                                <div className="p-5">
                                    <h5 className="h-5 mb-14 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.title}</h5>
                                    <Link to="/cart" style={{ marginLeft: '80px' }} onClick={() => { ctx.addItem(ele) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg- focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to Cart
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
                <nav aria-label="Page navigation example" className='mx-auto my-4'>
                    <ul className="flex flex-wrap text-wrap justify-center -space-x-px text-base h-10">
                        <li onClick={handlePrevious}>
                            <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-black border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        {
                            btnArr.map((ele) => {
                                return (
                                    <li onClick={() => handleNumber(ele)}>
                                        <a href="#" className={ele === currentPage ? 'flex items-center justify-center px-4 h-10 leading-tight text-black bg-blue-400 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' : "flex items-center justify-center px-4 h-10 leading-tight text-white bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{ele}</a>
                                    </li>
                                )
                            })
                        }
                        <li onClick={handleNext}>
                            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-black border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>}
        </div>
    )
}
