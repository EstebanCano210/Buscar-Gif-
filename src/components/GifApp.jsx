import { useGif } from "../hooks/useGif"
import { BuscarGif } from "./BuscarGif"
import { ContenedorGifs } from "./ContenedorGifs"

export const GifApp = () => {

    const {handleGetGif, gifs} = useGif()

    return(
        <>
            <BuscarGif handleGetGif={handleGetGif}/>
            <ContenedorGifs gifs={gifs}/>
        </>
    )
}