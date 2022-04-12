import React, {useState, useEffect} from 'react'
import clothesDatas from '../clothesData'
import Cart from './Cart'

export default function Shop() {
    //item quantity
    const [cart, setCart] = useState(false)
    const [item1, setItem1] = useState(0)
    const [item2, setItem2] = useState(0)
    const [item3, setItem3] = useState(0)
    const [item4, setItem4] = useState(0)
    const [item5, setItem5] = useState(0)
    const [item6, setItem6] = useState(0)
    const [item7, setItem7] = useState(0)
    const [item8, setItem8] = useState(0)
    const [item9, setItem9] = useState(0)
    //decrease quantity
    const decreaseBtn = (e) => {
        // console.log(e.target.id)
        if (e.target.id === "0"){
            setItem1((prevItem1)=>prevItem1 - 1)
        } else if(e.target.id === "1"){
            setItem2((prevItem2)=>prevItem2 - 1)
        } else if (e.target.id === "2"){
            setItem3((prevItem3)=> prevItem3 - 1)
        } else if (e.target.id === "3"){
            setItem4((prevItem4)=> prevItem4 - 1)   
        } else if (e.target.id === "4"){
            setItem5((prevItem5)=> prevItem5 - 1)
        } else if (e.target.id === "5"){
            setItem6((prevItem6)=> prevItem6 - 1)
        } else if (e.target.id === "6"){
            setItem7((prevItem7)=> prevItem7 - 1)
        } else if (e.target.id === "7"){
            setItem8((prevItem8)=> prevItem8 - 1)
        } else if (e.target.id === "8"){
            setItem9((prevItem9)=> prevItem9 - 1)
        }
    }
    //const increase quantity
    const increaseBtn = (e) => {
        console.log('click')
        if (e.target.id === "0"){
            setItem1((prevItem1)=>prevItem1 + 1)
        } else if(e.target.id === "1"){
            setItem2((prevItem2)=>prevItem2 + 1)
        } else if (e.target.id === "2"){
            setItem3((prevItem3)=> prevItem3 + 1)
        } else if (e.target.id === "3"){
            setItem4((prevItem4)=> prevItem4 + 1)   
        } else if (e.target.id === "4"){
            setItem5((prevItem5)=> prevItem5 + 1)
        } else if (e.target.id === "5"){
            setItem6((prevItem6)=> prevItem6 + 1)
        } else if (e.target.id === "6"){
            setItem7((prevItem7)=> prevItem7 + 1)
        } else if (e.target.id === "7"){
            setItem8((prevItem8)=> prevItem8 + 1)
        } else if (e.target.id === "8"){
            setItem9((prevItem9)=> prevItem9 + 1)
        }
    }
    //show cart on render note: i dont think  i need all items but making sure to update on every render tho.
    useEffect(()=>{
        if (item1 > 0 || item2 > 0 || item3 > 0 || item4 > 0 || item5 > 0 || item6 > 0 || item7 > 0 || item8 > 0 || item9 > 0){
            setCart(true)
        }
    },[item1,item2,item3,item4,item5,item6,item7,item8,item9])
    //const add to cart
    const addToCartBtn = (e) => {
        clothesDatas.find((clothesData)=>{
            if (parseInt(e.target.id) === clothesData.id){
                if(clothesData.id === 0){
                    setItem1((prevItem1)=>prevItem1 + 1)
                } else if (clothesData.id === 1){
                    setItem2((prevItem2)=>prevItem2 + 1)
                } else if (clothesData.id === 2){
                    setItem3((prevItem3)=>prevItem3 + 1)
                } else if (clothesData.id === 3){
                    setItem4((prevItem4)=>prevItem4 + 1)
                } else if (clothesData.id === 4){
                    setItem5((prevItem5)=>prevItem5 + 1)
                } else if (clothesData.id === 5){
                    setItem6((prevItem6)=>prevItem6 + 1)
                } else if (clothesData.id === 6){
                    setItem7((prevItem7)=>prevItem7 + 1)
                } else if (clothesData.id === 7){
                    setItem8((prevItem8)=>prevItem8 + 1)
                } else if (clothesData.id === 8){
                    setItem9((prevItem9)=>prevItem9 + 1)
                }
            }
        })
    }
    //show clothes on display
    const showClothesDisplay = clothesDatas.map((clothesData)=>{
        return (
            <div className='clothes-container'key={clothesData.id}>
                <div className='img-container'>
                    <img src={clothesData.img} alt="clothes pic" className='clothes-image'/>
                </div>
                <div className="item-info-container">
                    <p><b>{clothesData.name}</b></p>
                    <br></br>
                    <p>{clothesData.price}</p>
                </div>
                <br></br>
                <div className='btn-container'>
                    <button className='add-to-cart-btn' id={clothesData.id} onClick={addToCartBtn}>Add To Cart</button>
                </div> 
            </div>
        )
    })

    return (
        <div className="store-container">
            <div className="shop-container">
                {showClothesDisplay}
            </div>
                {cart && <Cart 
                    quantity1={item1} 
                    quantity2={item2} 
                    quantity3={item3}
                    quantity4={item4} 
                    quantity5={item5} 
                    quantity6={item6} 
                    quantity7={item7} 
                    quantity8={item8} 
                    quantity9={item9} 
                    decreaseClick={decreaseBtn}
                    increaseClick={increaseBtn}
                />}
        </div>
    )
}