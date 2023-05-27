import React from "react";
import * as S from '../Style'
import axios from "axios";
import { useState, useEffect } from "react";


export default function Main(){
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

   
    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=38695e19e221dae9d048b2c968a66740&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0,1))
            console.log()


        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }
    useEffect(() => {
        getFilmes()
    }, [getFilmes()])
    
    return(
        <S.ContainerBox id="main">
        <S.MainGeral back={fundo.map(item => item.poster)} id="main">
            {fundo.map(item => (
                <S.Descrição>
                    <h1>{item.title}</h1>
                    <h3>IMDB (avaliação): {item.vote_average}</h3>
                    <h3>Data de lançamento: {item.release_date}</h3>
                    <p>Sinopse (Resumo): {item.overview}</p>
                </S.Descrição>
            ))}
            </S.MainGeral>
    </S.ContainerBox>
    )
}