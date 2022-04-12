import React from 'react'

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className='information-container'>
                <form className='form-container'>
                    <label for="fullname">Full Name</label>
                    <input type="text" name="fullname"></input>
                    <label for="phonenumber">Phone Number</label>
                    <input type="text" name="phonenumber"></input>
                    <label for="email">Email</label>
                    <input type="text" name="email"></input>
                    <label for="yourcomment">Your Comment</label>
                    <textarea name="yourcomment" className='comment-box' rows="7"></textarea>
                    <button onClick={(e)=>e.preventDefault()}>Submit</button>
                </form>
                <div className="address-container">
                    <h4><u>Address:</u></h4>
                    <h3>FakeStore</h3>
                    <h3>123 TikTok Street</h3>
                    <h3>Tik City, Tok State, 101010</h3>
                </div>
            </div>
        </div>
    )
}