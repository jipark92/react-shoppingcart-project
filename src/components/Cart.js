import React, {useState} from 'react'

export default function Cart(props) {

    const showItem1 = () => {
        return (
            <div className='item-1-cart'>
                <img src={props.quantity1 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/61818373_008_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic1" className='item1-cart'/>
                <p>Name: {props.quantity1 > 0 ? "New Balance 574 GORE-TEX Sneaker": ""}</p>
                <p>Price: {props.quantity1 > 0 ? "$" + props.quantity1 * 150: ""}</p>
                <p>Quantity: {props.quantity1}</p>
                <button onClick={props.decreaseClick} id="0">Decrease</button>
                <button>Increase</button>
            </div>
        )
    }

    const showItem2 = () => {
        return (
            <div className='item-2-cart' >
                <img src={props.quantity2 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/66414004_004_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic2" className='item2-cart'/>
                <p>Name: {props.quantity2 > 0 ? "Katin Local Cord": ""}</p>
                <p>Price: {props.quantity2 > 0 ? "$" + props.quantity2 * 65: ""}</p>
                <p>Quantity: {props.quantity2}</p>
                <button onClick={props.decreaseClick} id="1" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }

    const showItem3 = () => {
        return (
            <div className='item-3-cart' >
                <img src={props.quantity3 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/64176423_010_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic3" className='item3-cart'/>
                <p>Name: {props.quantity3 > 0 ? "Adidas United Tee": ""}</p>
                <p>Price: {props.quantity3 > 0 ? "$" + props.quantity3 * 35: ""}</p>
                <p>Quantity: {props.quantity3}</p>
                <button onClick={props.decreaseClick} id="2" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }

    const showItem4 = () => {
        return (
            <div className='item-4-cart' >
                <img src={props.quantity4 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/64778665_001_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic4" className='item4-cart'/>
                <p>Name: {props.quantity4 > 0 ? "The North Face Lunar New Year Tee": ""}</p>
                <p>Price: {props.quantity4 > 0 ? "$" + props.quantity4 * 35: ""}</p>
                <p>Quantity: {props.quantity4}</p>
                <button onClick={props.decreaseClick} id="3" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }

    const showItem5 = () => {
        return (
            <div className='item-5-cart' >
                <img src={props.quantity5 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/62779269_016_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic5" className='item5-cart'/>
                <p>Name: {props.quantity5 > 0 ? "Smiley Bucket Hat": ""}</p>
                <p>Price: {props.quantity5 > 0 ? "$" + props.quantity5 * 30: ""}</p>
                <p>Quantity: {props.quantity5}</p>
                <button onClick={props.decreaseClick} id="4" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }
    
    return (
        <div>
            <h3>Your Shopping Cart</h3>
            {props.quantity1 > 0 ? showItem1() : ""}
            {props.quantity2 > 0 ? showItem2() : ""}
            {props.quantity3 > 0 ? showItem3() : ""}
            {props.quantity4 > 0 ? showItem4() : ""}
            {props.quantity5 > 0 ? showItem5() : ""}


        </div>
    )
}