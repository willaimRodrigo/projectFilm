import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviesCard } from "../../components/MoviesCard";

const apiKey = import.meta.env.VITE_API_KEY;
const urlbase = import.meta.env.VITE_URL_BASE;

export const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchMovies = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Erro:", res.statusText);
            return;
        }
        const data = await res.json();
        setMovies(data.results || []);
    };


    useEffect(() => {
        if (query) {

            const searchWithQueryURL = `${urlbase}?query=${query}&api_key=${apiKey}`;
            getSearchMovies(searchWithQueryURL);
        }
        
    }, [query]);


    return (
        <div>
            <h2>Resultados para: <span>{query}</span></h2>
            <div>
                {movies.length > 0 ? (movies.map((movie) =>
                    <MoviesCard key={movie.id} movie={movie} />)
                ) : (
                    <p>Nenhum resultado encontrado.</p>
                )}
            </div>
        </div>
    )
}