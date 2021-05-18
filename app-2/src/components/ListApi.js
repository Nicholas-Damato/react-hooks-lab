import { useState, useEffect } from 'react'
import axios from 'axios'

const ListApi = () => {
    const [api, setApi] = useState([])

    useEffect(() => {
        axios.get('https://www.moogleapi.com/api/v1/games')
            .then((res) => { setApi(res.data) })
            .catch(err => { console.log(err) })

    }, [])
    return (
        <div>
            {console.log(api)}
            {api.map((api) => {
                return (
                    <div>
                        <h1> {api.title} </h1>
                        <p> {api.description} </p>
                        {api.pictures ? (<div>
                            <img src={api.pictures} />
                        </div>) : (
                            <div> <p> (There should be a picture here but there is no picture unfortunately) </p> </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ListApi