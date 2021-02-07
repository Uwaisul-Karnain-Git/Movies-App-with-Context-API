import { useState, createContext } from 'react';


/* We are going to import this 'MovieContext' to actually use it in the different components that we want to 
(whenever we want to use the information from 'MovieProvider', we just import the 'MovieContext'). */

export const MovieContext = createContext();  // Initiate the 'Context' 


/* This MovieProvider's job is to just hold some information and then it down to all the different components that we want to
(this is just going to provide the information to the different components). */

export const MovieProvider = props => { // Just 'export' this not as the 'default export'

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$15',
            id: 23524
        }
    ]);

    return (
        <div>

            {/*  Render all the child components that we want to pass information via 'MovieContext'.
              '{props.children}' => this is similar to having:
                <Nav />
                <MovieList />
            */}

            <MovieContext.Provider value={[movies, setMovies]}>                
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}



