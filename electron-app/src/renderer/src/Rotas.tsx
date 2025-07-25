import { Router, Route } from 'electron-router-dom'
import { Menu } from './pages/Menu'
import { Tradicional } from './pages/Tradicional'
import { Resultado } from './pages/Resultado'
export default function Rotas(){
  return(
    <Router
      main={
        <>
          <Route path='/' element={<Menu/>}/>
          <Route path='/Tradicional' element={<Tradicional/>}/>
          <Route path='/resultado_um' element={<Resultado />}/>
        </>
      }
    />
  )
}