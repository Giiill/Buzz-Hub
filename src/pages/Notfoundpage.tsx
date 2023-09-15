import { Link } from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div>
            The page was not found, go back to the  <Link to='/'>home page.</Link>
        </div>
    )
}

export {Notfoundpage};