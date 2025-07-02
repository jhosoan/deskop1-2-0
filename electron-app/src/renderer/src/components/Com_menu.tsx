import { Link } from "react-router-dom"
import { Tradicional } from "@renderer/pages/Tradicional"

export function Com_menu(){
    return(
        <>
          
          <div className="flex flex-row">
              <Link to="/Tradicional">Tradicional</Link>;
              <div className="basis-2xs">Reconhecido.</div>
              
          </div>
        </>
    )
}