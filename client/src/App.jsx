
import { useLocation, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'
import './App.css'
import Activities from './views/Activities/Activities'


export default function App() {


  const location = useLocation()

  if(location.pathname === '/'){
    return (
      <>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </>
    )
  } else {
    return (
      <>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/activities' element={<Activities/>} />
        </Routes>
      </>
    )
  }
}
