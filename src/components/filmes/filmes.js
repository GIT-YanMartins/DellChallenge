import React from "react";
import * as F from '../Style'
import * as S from '../Style'
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";



export default function Filmes(){
    const breakPoints = [
    
        { width: 1, itemsToShow: 5, Pagination: false}
       
        
      ];
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        getFilmes()
    }, [filmes])

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=38695e19e221dae9d048b2c968a66740&language=pt-BR&page=1')
        .then((resposta) => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)

        }).catch((error) => alert(`desculpe, você teve um erro de requisição ${error}`))
    }

    return(
        
        <F.FooterGERAL id="filmes"> 
            <Carousel breakPoints={breakPoints} pagination={false} itemPadding={[10, 15]}>
            {filmes.map((item) => (
                <S.BoxFilms>
                    <img src={item.image} alt={item.title}/>
                    <h2>Name: {item.original_title}</h2>
                </S.BoxFilms>
                
            ))}
            </Carousel>
            </F.FooterGERAL>
    )
}