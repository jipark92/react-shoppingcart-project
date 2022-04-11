import React, {useState, useEffect} from 'react'
import clothesDatas from '../clothesData'
import Cart from './Cart'

export default function Shop() {
    
    //item quantity
    const [cart, setCart] = useState(false)
    const [item1, setItem1] = useState(0)

    //show cart 
    useEffect(()=>{
        if (item1 > 0 ){
            setCart(true)
        }
    })

    //const add to cart
    const addToCartBtn = (e) => {
        clothesDatas.find((clothesData)=>{
            if (parseInt(e.target.id) === clothesData.id){
                if(clothesData.id === 0){
                    setItem1((prevItem1)=>prevItem1 + 1)
                    console.log(item1)
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
            <div className='cart-container'>
                {cart && <Cart quantity={item1}/>}
            </div>
        </div>
    )
}