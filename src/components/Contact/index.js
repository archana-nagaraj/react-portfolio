import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function ContactForm() {
    const [errorMessage, setErrorMessage ] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else{
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section style={{width: "600px"}}>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit} style={{width: "100%"}}>
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" style={{width: "50%"}} />
                </div>
                <div>
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} style={{width: "50%"}} />
                </div>
                <div>
                    <label htmlFor="message">Message</label><br />
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;