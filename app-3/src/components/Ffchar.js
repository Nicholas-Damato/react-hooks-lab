import axios from 'axios'
import { useState, useEffect } from 'react'

const Ffchar = (props) => {
    const [apiInfo, setApiInfo] = useState(null)
    const { id } = props.match.params

    useEffect(() => {
        axios.get(`https://www.moogleapi.com/api/v1/characters/${id}`)
            .then((res) => {
                setApiInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [id])
    return (

        <div>
            {apiInfo ? (
                <div>
                    {console.log(apiInfo)}
                    <h1> {apiInfo[0].name} </h1>
                    <br />
                    <p> {apiInfo[0].description} </p>
                    <img src={apiInfo[0].pictures[0].url} />
                </div>
            ) : (
                <div> ...loading </div>
            )}
        </div>
    )
}

export default Ffchar