import { Router, Route } from 'electron-router-dom'
import { Menu } from './pages/Menu'
import { Tradicional } from './pages/Tradicional'
export default function Rotas(){
  return(
    <Router
      main={
        <>
          <Route path='/' element={<Menu/>}/>
          <Route path='/Tradicional' element={<Tradicional/>}/>
        </>
      }
    />
  )
}