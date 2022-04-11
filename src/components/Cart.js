import React, {useState} from 'react'

export default function Cart(props) {

    const showItem1 = () => {
        return (
            <div className='item-cart'>
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
            <div className='item-cart' >
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
            <div className='item-cart' >
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
            <div className='item-cart' >
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
            <div className='item-cart' >
                <img src={props.quantity5 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/62779269_016_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic5" className='item5-cart'/>
                <p>Name: {props.quantity5 > 0 ? "Smiley Bucket Hat": ""}</p>
                <p>Price: {props.quantity5 > 0 ? "$" + props.quantity5 * 30: ""}</p>
                <p>Quantity: {props.quantity5}</p>
                <button onClick={props.decreaseClick} id="4" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }

    const showItem6 = () => {
        return (
            <div className='item-cart' >
                <img src={props.quantity6 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/67880997_012_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic6" className='item6-cart'/>
                <p>Name: {props.quantity6 > 0 ? "Tupac Me Against The World Tee": ""}</p>
                <p>Price: {props.quantity6 > 0 ? "$" + props.quantity6 * 39: ""}</p>
                <p>Quantity: {props.quantity6}</p>
                <button onClick={props.decreaseClick} id="5" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }
    const showItem7 = () => {
        return (
            <div className='item-cart' >
                <img src={props.quantity7 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/66367863_060_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic7" className='item7-cart'/>
                <p>Name: {props.quantity7 > 0 ? "Polo Ralph Lauren Paint Splatter Logo": ""}</p>
                <p>Price: {props.quantity7 > 0 ? "$" + props.quantity7 * 65: ""}</p>
                <p>Quantity: {props.quantity7}</p>
                <button onClick={props.decreaseClick} id="6" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }
    const showItem8 = () => {
        return (
            <div className='item-cart' >
                <img src={props.quantity8 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/65896250_001_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic8" className='item8-cart'/>
                <p>Name: {props.quantity8 > 0 ? "UO Daisy Checkerboard Print Swim Short": ""}</p>
                <p>Price: {props.quantity8 > 0 ? "$" + props.quantity8 * 39: ""}</p>
                <p>Quantity: {props.quantity8}</p>
                <button onClick={props.decreaseClick} id="7" >Decrease</button>
                <button>Increase</button>
            </div>
        )
    }
    const showItem9 = () => {
        return (
            <div className='item-cart' >
                <img src={props.quantity9 > 0 ? "https://images.urbndata.com/is/image/UrbanOutfitters/67301226_046_d?$medium$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" : ""} alt="pic6" className='item6-cart'/>
                <p>Name: {props.quantity9 > 0 ? "UO Reggie Soccer Jersey Tee": ""}</p>
                <p>Price: {props.quantity9 > 0 ? "$" + props.quantity9 * 55: ""}</p>
                <p>Quantity: {props.quantity9}</p>
                <button onClick={props.decreaseClick} id="8" >Decrease</button>
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
            {props.quantity6 > 0 ? showItem6() : ""}
            {props.quantity7 > 0 ? showItem7() : ""}
            {props.quantity8 > 0 ? showItem8() : ""}
            {props.quantity9 > 0 ? showItem9() : ""}



        </div>
    )
}