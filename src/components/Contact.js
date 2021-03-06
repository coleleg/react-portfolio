import React, { useState } from 'react';

import { validateEmail, capitalizeFirstLetter } from '../utils/helpers';

function Contact(props) {
    const setPage = props;
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState(true);
    const { name, email, message } = formState; 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            console.log('Form Submitted', formState);
            alert('Form submitted.  Thank you for your interest!')
            window.location.reload();
        } 
        
        if (errorMessage) {
        alert('Please fill out all fields before submitting.');
        }
        
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(capitalizeFirstLetter(`${e.target.name} is required.`));
                } else {
                    setErrorMessage('');
                }
            }
            if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>
            <h1 id='contact-me'>Contact Me</h1>
            <form class='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' class='button' onClick={() => setPage('home')}>Submit</button>
            </form>
        </section>
    )
}

export default Contact;