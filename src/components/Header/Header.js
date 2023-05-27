import React from "react";
import * as H from "../Style"
import pesquisa from "../Assets/pesquisa (1).png"
import Movie from "../Assets/DellMovies.png"




export default function Header(){
    return(
        <H.HeaderBox>
        <H.BoxIMG>
            <img src= {Movie} alt="DellLOGO" className= "logoDell"/>
        </H.BoxIMG>
         <H.Segunda>
        <button className="button1"><a href="#Series">Séries</a></button>
        <button><a href="#filmes">Filmes</a></button>
        </H.Segunda>
         <H.Terceira>
            <ul>
            <img src= {pesquisa} alt="pesquisa"/>
                <li> <a href= "">Filtro</a></li>
                <li>Login</li>
            </ul>
        </H.Terceira>
        </H.HeaderBox>

    )
}