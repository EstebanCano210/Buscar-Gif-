import { useState } from "react"
import { reqGif } from "../services/gif"

export const useGif = () =>{
    const [gifs,setGifs] = useState([]) 
    
    const handleGetGif = (e, categoria) =>{
        //evita la recarga del navegador
        e.preventDefault()

        reqGif(categoria).then((gifs) => {
                setGifs(gifs)
            })
        }
     
    return{
        gifs,
        handleGetGif
    }
}