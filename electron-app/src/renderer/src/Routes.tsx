import {Router, Route} from 'electron-router-dom'
import {Menu} from './pages/Menu'
export function Routes(){
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