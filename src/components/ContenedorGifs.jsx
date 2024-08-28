export const ContenedorGifs = ({gifs}) =>{    
    return (
        <>
        <div className="d-flex flex-row justify-content-center alig-items-center">   
            {gifs.map(({id,title, url})=>{
                return(
                    <img key={id} className="w-25 me-2" src= {url} alt= "gif"/>
                )
            })}
        </div>
        </>
    )
}