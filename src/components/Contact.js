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
                    <textarea name="yourcomment" className='comment-box'></textarea>
                </form>
                <div className="address-container">
                    <h3>FakeStore</h3>
                    <h3>123 TikTok Street</h3>
                    <h3>Tik City, Tok State, 101010</h3>
                </div>
            </div>
        </div>
    )
}
