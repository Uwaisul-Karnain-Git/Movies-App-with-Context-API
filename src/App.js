import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';
import { MovieProvider } from './MovieContext'; // Since 'MovieProvider' is not the 'Default Export', we have to include that inside {}


function App() {
    return (
        <MovieProvider>
            <div className='App'>
                {/* All the 'States' in this 'MovieProvider' is accessible to all the components wrapped within it */}
                <Nav />
                <AddMovie />
                <MovieList />
            </div>
        </MovieProvider>
    )
}

export default App;
