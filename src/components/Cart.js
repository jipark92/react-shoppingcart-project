import React from 'react'

export default function Cart(props) {
    return (
        <div>
            <h3>Carts:</h3>
            <p>{props.quantity}</p>
        </div>
    )
}