import { useState } from "react"

export const BuscarGif = ({handleGetGif}) =>{

    const [categoria, setCategoria] = useState("")

    return (

        <>
        <div className="d-flex flex-row justify-content-center alig-items-center mt-3 mb-4 p-2 mb-2 bg-primary">
            <h1 className="fw-light text-white">{categoria ? `Categoria: ${categoria}` : "Buscar GIF"}</h1>
        </div>
        
        <div className="d-flex flex-row justify-content-center alig-items-center mt-3 mb-4">
                <form className="d-flex" onSubmit={ (e) => { handleGetGif(e, categoria)}}>
                    <input type="text" className="form-control me-2" onChange={ (e) => {setCategoria(e.target.value)}}/>
                    <input type="submit"  value="Buscar" className="d-grid gap-2 col-6 mx-auto btn btn-outline-info" />
                </form>
        </div >
        </>
  )
}
