import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from "react-icons/bs";

import { MoviesCard } from "../../components/MoviesCard";
import style from "./style.module.scss";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-Us", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?api_key=${apiKey}`;
        getMovie(movieUrl);
    }, [])

    return (
        <div className={style.movie}>
            {movie ? (
                <>
                    <MoviesCard movie={movie} showLink={false} />
                    <p>{movie.tagline}</p>
                    <div >
                        <h3><BsWallet2 />Orçamento:</h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div>
                        <h3><BsGraphUp />Receita:</h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div>
                        <h3><BsHourglassSplit />Duração:</h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className={style.description}>
                        <h3><BsFillFileEarmarkTextFill />Descrição:</h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            ) : (
                <p>Carregando...</p>
            )}
            
        </div>
    );
}