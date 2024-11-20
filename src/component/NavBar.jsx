import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext, useRef } from 'react'
import CartContext from '../context/CartContext'
import UserContext from '../context/UserContext'

export default function NavBar() {
  let ctx = useContext(CartContext);
  console.log(ctx)

  let ctx1 = useContext(UserContext);
  console.log(ctx1)

  let login = ctx1.user.login

  let searchRef = useRef()


  const handleSearch = () => {
    console.log(searchRef.current.value)
    ctx.setSearch(searchRef.current.value)
  }

  return (
    <div>
      <nav className="bg-black border-gray-200 dark:bg-gray-900 fixed" style={{ zIndex: '1', width: '100%' }}>
        <div className="flex items-center space-x-3 rtl:space-x-reverse ml-7">
          <img style={{ width: '50px', marginTop:'15px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJFLyACB4t92qIvAyOAhl1rfOunRy5XLP_w&s" className="h-8 rounded-xl" alt="E-commerce Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">E-commerce</span>
        </div>
        <ul className="navbar " style={{ marginTop:'-30px', marginBottom:'15px', marginLeft:'20%'}} >
          <li>
            <Link to="/" className="block  text-white hover:text-blue-700 rounded md:bg-transparent md:text-blue-700  md:dark:text-blue-500" aria-current="page">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
          </li>
          <li>
            <Link to="/cart" className="block  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cart <sup>{ctx.cartArr.length}</sup></Link>
          </li>
          <li>
            <Link to="/service" className="block  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
          </li>

          <div className="flex" style={{ marginTop:'-5px', marginLeft:'10%' }} >
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input ref={searchRef} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <button onClick={handleSearch} className='mx-5 bg-blue-400 px-3 rounded-lg'>Search</button>
          </div>


          <li className="dropdown" style={{ marginLeft:'15%' }} >
            <a href="#" class="dropbtn"><i className="ri-list-check"></i></a>
            <div class="dropdown-content">

              {login === false && <li>
                <Link to="/signup" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Signup</Link>
              </li>}
              {login === false && <li>
                <Link to="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
              </li>}
              {login === true && <li>
                <Link onClick={() => ctx1.logout()} to="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</Link>
              </li>}
            </div>
          </li>

        </ul>
      </nav>
    </div>
  )
}
