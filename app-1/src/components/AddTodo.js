import { useState } from 'react'

const AddTodo = (props) => {
    const [input, setInput] = useState('')

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                props.addItem(input)
                setInput('')
            }}> Add Item </button>
        </div>
    )
}

export default AddTodo