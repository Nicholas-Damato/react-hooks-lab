import { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

const List = () => {
    const [list, setList] = useState([])

    const addItem = (item) => {
        const newList = [...list, item]
        setList(newList)
    }

    return (
        <div>
            <AddTodo addItem={addItem} />
            {list.map((items) => {
                return <Todo items={items} />
            })}
        </div>
    )
}

export default List