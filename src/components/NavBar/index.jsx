import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import style from "./style.module.scss";

export const NavBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav className={style.nav}>
            <h2>
                <Link to="/" className={style.title}>
                    <BiCameraMovie className={style.logo}/>MoviesRank
                </Link>
            </h2>
            <form onSubmit={handleSubmit} className={style.form}>
                <input className={style.input} type="text"
                 placeholder="Busque um filme" 
                onChange={(e) => setSearch(e.target.value)} 
                value={search} />
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}