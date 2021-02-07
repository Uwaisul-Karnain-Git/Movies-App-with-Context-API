import { useContext } from 'react';
import { MovieContext } from '../MovieContext';

const Nav = ({}) => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Movies App</span>
            <span className="navbar-brand mb-0 h1">List of Movies: {movies.length}</span>
        </nav>
    )
}

export default Nav;

