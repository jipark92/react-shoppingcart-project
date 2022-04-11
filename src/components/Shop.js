import React from 'react'
import clothesDatas from '../clothesData'

export default function Shop() {


    console.log(clothesDatas)
    //show clothes on display
    const showClothesDisplay = clothesDatas.map((clothesData)=>{
        return (
            <div className='clothes-container'key={clothesData.id}>
                <div className='img-container'>
                    <img src={clothesData.img} alt="clothes image" className='clothes-img'/>
                </div>
                <div className="item-info-container">
                    <p><b>{clothesData.name}</b></p>
                    <br></br>
                    <p>{clothesData.price}</p>
                </div>
                <br></br>
                <div className='btn-container'>
                    <button className='add-to-cart-btn'>Add To Cart</button>
                </div> 
            </div>
        )
    })

    return (
        <div className="shop-container">
            {showClothesDisplay}
        </div>
    )
}