import { useContext } from 'react'; // To consume or use the 'MovieContext', we can use the 'useContext' hook
import Movie from './Movie';
import { MovieContext } from '../MovieContext';

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            {movies.map(movie =>(
                <Movie key={movie.id} movie={movie} />
            ))}           
        </div>
    )
}

export default MovieList;
