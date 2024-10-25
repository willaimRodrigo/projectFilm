import { useState, useEffect } from "react";
import { MoviesCard } from "../../components/MoviesCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
    const [bestMovies, setBestMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setBestMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div>
            <h2>Melhores Filmes:</h2>
            <div>
                {bestMovies.length > 0 && bestMovies.map((movie) => 
                <MoviesCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}