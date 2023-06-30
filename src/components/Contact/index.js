import React, {useState} from 'react'

function Contact() {
    const [formState, setFormState] = useState({ name:'', email:'', message:''})
    const [errorMessage, setErrorMessage] = useState('')
    const {name, email, message} = formState

    const handleSubmit = (e) => {
        if (!errorMessage) {
            console.log('Submit Form', formState)
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email'){
            if(!e.target.name.length){
                setErrorMessage(`$(e.target.name) is required`)
            } else {
                setErrorMessage('')
            }
        }
        if (e.target.name === 'name'){
            if(!e.target.name.length){
                setErrorMessage(`$(e.target.name) is required`)
            } else {
                setErrorMessage('')
            }
        }
        if (e.target.name === 'message'){
            if(!e.target.name.length){
                setErrorMessage(`$(e.target.name) is required`)
            } else {
                setErrorMessage('')
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
            console.log('Handle Form', formState)
        }
    }
    return (
        <section>
            <h1 data-testid='h1tag'>Contact Me:</h1>
            <form id='contact-from' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <br></br>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <br></br>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <br></br>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
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

export default Contact