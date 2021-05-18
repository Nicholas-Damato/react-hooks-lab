import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Fflist = () => {
    const [api, setApi] = useState([])

    useEffect(() => {
        axios.get('https://www.moogleapi.com/api/v1/characters')
            .then((res) => {
                setApi(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div> {api.map((char) => {
            return <Link to={`/character/${char.id}`}> <h2> {char.name} </h2></Link>
        })} </div>
    )
}

export default Fflist