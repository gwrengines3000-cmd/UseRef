import { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => inputRef.current.select() }>Focus Input</button>
        </div>
    )
}

export default FocusInput
