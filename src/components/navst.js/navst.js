import React from "react";
import * as S from '../Style'
import axios from "axios";
import { useState, useEffect } from "react";
import pesquisa from '../Assets/lupa.png'



export default function Header(){
    return(
<S.Subtitles>
<ul>
    <li>Popular</li>
    <li>Drama</li>
    <li>Ação</li>
    <li>Aventura</li>
    <li>Comédia</li>
    <li>Crime</li>
    <li>Fantasia</li>
    <li>Familia</li>
    <img src= {pesquisa} alt="pesquisa"/>
</ul>
</S.Subtitles>

    )
}
