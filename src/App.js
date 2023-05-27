import { createGlobalStyle } from "styled-components";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Navst from './components/navst.js/navst'
import Filmes from './components/filmes/filmes'
import Series from './components/Series/Series'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Carousel from "react-elastic-carousel";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`
function App() {
  return (
    <>
<Header/>
<Main/>
<Navst/>
<Filmes/>
<Series/>
<GlobalStyle/>
    </>
  );
}

export default App;
