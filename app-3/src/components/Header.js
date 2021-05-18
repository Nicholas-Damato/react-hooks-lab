import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/list'> <h2> List </h2> </Link>
            <Link to='/'> <h2> Home </h2> </Link>
        </div>
    )
}

export default Header