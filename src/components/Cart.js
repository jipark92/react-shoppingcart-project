import React, {useState} from 'react'

export default function Cart(props) {

    const showItem1 = () => {
        return (
            <div className='item-1-cart'>
                <img src={props.quantity1 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/61818373_008_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic1" className='item1-cart'/>
                <p>Name: {props.quantity1 > 0 ? "New Balance 574 GORE-TEX Sneaker": ""}</p>
                <p>Price: {props.quantity1 > 0 ? props.quantity1 * 150: ""}</p>
                <p>Quantity: {props.quantity1}</p>
                <button onClick={props.decreaseClick} id="0">Decrease</button>
                <button>Increase</button>
            </div>
        )
    }

    const showItem2 = () => {
        return (
            <div className='item-2-cart' >
                <img src={props.quantity2 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/66414004_004_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic1" className='item2-cart'/>
                <p>Name: {props.quantity2 > 0 ? "Katin Local Cord": ""}</p>
                <p>Price: {props.quantity2 > 0 ? props.quantity2 * 65: ""}</p>
                <p>Quantity: {props.quantity2}</p>
                <button onClick={props.decreaseClick} id="1" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }
    
    return (
        <div>
            <h3>Your Shopping Cart</h3>
            {props.quantity1 > 0 ? showItem1() : ""}
            {props.quantity2 > 0 ? showItem2() : ""}
        </div>
    )
}