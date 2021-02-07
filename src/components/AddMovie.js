import { useState, useContext } from 'react';
import { MovieContext } from '../MovieContext';
import { v4 as uuidv4 } from 'uuid';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value);
    };

    const updatePrice = e => {
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        const newMovie = {id: uuidv4(), name, price};
        setMovies(prevMovies => [...prevMovies, newMovie])   // This way, you can get the latest information about your 'State'

        // Clear the textboxes
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={addMovie}>
            <input type='text' name='name' value={name} onChange={updateName} />
            <input type='text' name='price' value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;
