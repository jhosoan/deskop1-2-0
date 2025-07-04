import { Link } from "react-router-dom"
export function Com_Tradicio(){
    return(
        <div>
        <header className="bg-blue-600 h-15 m-0">
          <h1 className=" ">box </h1>
          <div className="flex justify-evenly ...">
                <div className=" bg-amber-400">01</div>
                <div className=" bg-amber-400">02</div>
                <div className=" bg-amber-400">03</div>
                <div className=" bg-amber-400">04</div>
          </div>
          
        </header>

          <Link className="duration-300 ease-in ... text-blue-500 m-5" to="/">voltar</Link>
        </div>
    )
}