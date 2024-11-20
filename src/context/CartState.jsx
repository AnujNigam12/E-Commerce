import React, { useState } from 'react'
import CartContext from './CartContext'
import { toast } from 'react-toastify';

const CartState = (props) => {
  const [cartArr, setcartArr] = useState([])
  const [search, setSearch] = useState('')

  function addItem(ans) {
    console.log(ans)
    ans.quantity = 1

    let findAns = cartArr.find((ele) => ele.id === ans.id)
    if (findAns) {
      toast.error('Item already exists', { position: "top-center", theme: "dark" });
    }
    else {
      setcartArr([...cartArr, ans])
      toast.success('Item Added Successfully', { position: "top-center", theme: "dark" });
    }
  }

  function btnIncrement(ans, i) {
    console.log(ans)
    console.log(i)

    let updateObj = { ...ans, quantity: ans.quantity + 1, price: ans.price + (ans.price / ans.quantity) }
    let copyArr = [...cartArr]
    copyArr[i] = updateObj

    console.log("running")
    setcartArr(copyArr)
  }

  function btnDecrement(ans, i) {
    console.log(ans)
    console.log(i)

    if (ans.quantity <= 1) {
      return
    }

    let updateObj = { ...ans, quantity: ans.quantity - 1, price: ans.price - (ans.price / ans.quantity) }
    let copyArr = [...cartArr]
    copyArr[i] = updateObj

    console.log("running")
    setcartArr(copyArr)
  }

  function removeItem(ele, i) {
    let filterArr = cartArr.filter((obj) => obj.id != ele.id)
    setcartArr(filterArr)
    toast.success('Item Removed Successfully', { position: "top-center", theme: "dark" });
  }

  return (
    <CartContext.Provider value={{ cartArr, addItem, btnIncrement, btnDecrement, removeItem, search, setSearch }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
