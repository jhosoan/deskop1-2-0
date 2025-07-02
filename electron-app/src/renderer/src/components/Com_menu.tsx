import { Link } from "react-router-dom"
import { Tradicional } from "@renderer/pages/Tradicional"

export function Com_menu(){
    return(
        <>
          
          <div className="flex flex-row">
              <Link className="duration-300 ease-in ... text-blue-500 m-5" to="/Tradicional">Tradicional</Link>
              <Link className="duration-300 ease-in ... text-blue-500 m-5"  to="/Tradicional">Reconhecido.</Link>
             
          </div>
        </>
    )
}