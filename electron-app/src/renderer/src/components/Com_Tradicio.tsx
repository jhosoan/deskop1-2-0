import { Link } from "react-router-dom"
import { Head } from "./Head"
export function Com_Tradicio(){
    return(
        <div>
         <Head />
         <div className="bg-blue-900 h-15 border-6 border-white ">
            <h1>box 2</h1>
          </div>
        <div className="bg-blue-900 h-90">
          <h1>bom 3</h1>
        </div>
                
        <div className="bg-red-700 h-100">
          <div className="flex flex-wrap-reverse">
            <div>
              <div className="truncate bg-white w-100 h-12 ml-6 mt-6">
            <h1 className="text-center text-5xl">00:00</h1>
          </div>
             <div className="bg-amber-400 ml-6">
                   <button className="m-10">START</button>
                   <button className="m-10" >STOP</button>
                   <button className="m-10">RESET</button>
          </div>
            </div>
            <div>               
            </div>
            <div className="flex flex-wrap">
               <div className="bg-amber-900 m-20 ">
                <h1>POOMSAE 1</h1>
               </div>
               <div className="bg-amber-600 m-20">
                <h1>POOMSAE 2</h1>
               </div>
            </div>
          </div>          
        </div>

          <Link className="duration-300 ease-in ... text-blue-500 m-5" to="/">voltar</Link>


          <Link className="duration-300 ease-in ... text-blue-500 m-5" to="/resultado_um">Proximo</Link>
        </div>
    )
}