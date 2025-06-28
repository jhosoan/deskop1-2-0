import { Router, Route } from 'electron-router-dom'
import { Menu } from './pages/Menu'

export default function Rotas(){
  return(
    <Router
      main={
        <>
          <Route path='/' element={<Menu/>}/>
        </>
      }
    />
  )
}