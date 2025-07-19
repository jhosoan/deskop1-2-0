import { Link } from "react-router-dom"
export function Com_Tradicio(){
    return(
        <div>
        <header className="bg-blue-600 h-15 m-0">
          <h1 className=" ">box </h1>
          <div className="flex justify-evenly ...">
                <div className="text-center bg-amber-400 w-10">
                  <h1>#1</h1>
                </div>
                <div className=" bg-amber-400">br</div>
                <div className="text-center bg-amber-400 w-290" >03</div>
                <div className="text-center bg-red-600 w-13">1</div>
          </div>
          
        </header>
        <div className="bg-blue-900 h-15 border-6 border-white ">
            <h1>box 2</h1>
        </div>
        <div className="bg-blue-900 h-90">
          <h1>bom 3</h1>
        </div>
         <Link className="duration-300 ease-in ... text-blue-500 m-5" to="/">voltar</Link>


         
        <div className="bg-red-700 h-100">
          <div className="flex flex-wrap-reverse">
            <div>
              <div className="truncate bg-white w-100 h-12 ">
            <h1>00:00</h1>
          </div>
             <div>
                   <button className="m-10">START</button>
                   <button className="m-10" >STOP</button>
                   <button className="m-10">RESET</button>
          </div>
            </div>
            <div>               
            </div>
            <div>
               <div>
                <h1>POOMSAE 1</h1>
               </div>
               <div>
                <h1>POOMSAE 2</h1>
               </div>
            </div>
          </div>          
        </div>

          <Link className="duration-300 ease-in ... text-blue-500 m-5" to="/">voltar</Link>
        </div>
    )
}