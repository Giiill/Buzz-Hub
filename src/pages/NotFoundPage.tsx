import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            The page was not found, go back to the  <Link to='/'>home page.</Link>
        </>
    )
}

export { NotFoundPage };
