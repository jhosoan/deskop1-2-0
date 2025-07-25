import { Link } from "react-router-dom"
export function Com_Resultado(){
    return(
        <>
          <div className="bg-blue-900 h-15 border-6 border-white ">
            <h1>box 2</h1>
         </div>
         <div className="h-132 bg-blue-800">
            <h1>Resultado</h1>
         </div>
        <Link to="/Tradicional">Voltar</Link>
        </>
        
        
    )
}