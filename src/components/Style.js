import styled from "styled-components";


// https://api.themoviedb.org/3/movie/popular?api_key=38695e19e221dae9d048b2c968a66740&language=pt-BR&page=1

export const HeaderBox = styled.header`
width: 100vw;
height: 15vh;
z-index: 1;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
background-color: rgba(0, 0, 0, 0.4)


`


export const Segunda = styled.header`
align-items: center;
width: 25vw;
height: 8vh;




button{
    width: 10vw;
    height: 7vh;
    background-color: #747474;
    border-radius: 50px;
    font-size: 25px;
    color:white;

a{
    text-decoration: none;
    color: white;
}
}

.button1{
    background-color: transparent;
    


}
.logoDell{
    width: 180px;

}
`


export const Terceira = styled.header`
color: white;
width: 20vw;

a{
    text-decoration: none;
    color: white;
}
ul{
    font-weight: bold;
 
    color: white;
    display: flex;
    
    align-items: center;
    justify-content: space-evenly;
    width: 20vw;
    font-size: 20px;
    list-style: none;
}
img{
    width: 60px;
    
}
`
export const BoxFilms = styled.header`
font-size: 3rem;
    width: 20vw;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction: column;
    padding-top: 10px;
    img{
        width: 13vw;
    }
    h2{
        font-size: 1rem;
    }
`

export const MainGeral = styled.main`
background-image: url(${props => props.back});
    background-repeat:no-repeat;
    background-size:100% 100%;
    height: 100vh;
    width: 100vw;
`

export const FooterGERAL = styled.footer`
background-color: #000;
    height: 60vh;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`

export const Descrição = styled.main`
width: 60%;
height: 80vh;
display:flex;
flex-direction: column;
justify-content: end;
margin-left: 7vw;
`
export const ContainerBox=styled.main`
height:100vh;
width: 100vw;
`
export const BoxIMG = styled.header`
width: 20vw;
height: 15vh;
display: flex;
align-items: center;

img{
    width: 10vw;
}`

export const Subtitles = styled.footer`
width: 100%;
height: 3vh;
ul{
    font-weight: bold;
    color: white;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    list-style: none;
    
}
img{
    width: 28px;
    margin-top: 5px;
    
}

ul:hover{
    cursor: pointer;
}`


