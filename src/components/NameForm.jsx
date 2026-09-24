import { useState } from 'react'

const NameForm = () => {
    const [ name, setName ] = useState('')
    const [agreed, setAgreed] = useState(false)
    const [size, setSize] = useState('small')
    const [country, setCountry] = useState('usa')
    const [ email, setEmail ] = useState('')
    const [ isEmailValid, setIsEmailValid ] = useState(false)

    const handleEmailChange = ({ target }) => {
    const { value, validity } = target
    setEmail(value)
    setIsEmailValid(validity.valid && value !== '')
    }

    return (
        <div>
            <h2>Enter your name</h2>
            <input
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            <p>Hello, {name || 'Guest'}!</p>

            <h2>Enter your email</h2>
            <input
                type="email"
                value={email}
                required
                onChange={handleEmailChange}
                style={isEmailValid ? {} : { backgroundColor: 'red'}}
            />
            <p>Your email is: {isEmailValid ? email : 'Invalid!'}</p>

            <h2>Terms and Conditions</h2>
            <label>
                <input
                    type="checkbox"
                    checked={agreed}
                    onChange={({ target }) => setAgreed(target.checked)}
                />
                I agree to the terms and conditions
            </label>
            <p>{agreed ? 'Thank you for agreeing!' : 'You must agree to continue.'}</p>
            <h2>Select Size</h2>
            <label>
                <input
                    type="radio"
                    value="small"
                    checked={size === 'small'}
                    onChange={({ target }) => setSize(target.value)}
                />
                Small size
            </label>
            <label>
                <input
                    type="radio"
                    value="medium"
                    checked={size === 'medium'}
                    onChange={({ target }) => setSize(target.value)}
                />
                Medium size
            </label>
            <label>
                <input
                    type="radio"
                    value="large"
                    checked={size === 'large'}
                    onChange={({ target }) => setSize(target.value)}
                />
                Large size
            </label>
            <p>You have selected: {size}</p>
            <h2>Select Country</h2>
            <select value={country} onChange={({ target }) => setCountry(target.value)}>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="mexico">Mexico</option>
            </select>
            <p>Your selected country: {country}</p>
        </div>
    )
}

export default NameForm
