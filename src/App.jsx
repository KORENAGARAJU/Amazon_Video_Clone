import './App.css'
import { Routes , Router , Route,  } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './Components/Home/Home.jsx';
import Store from './Components/Store/Store.jsx';
import Movies from './Components/Movies/Movies.jsx';
import LoginSignUp from './Components/LoginSignUp_Page/LoginSignUp.jsx';
function App() {

  return (
    <>
      <NavBar/>
      
      <Routes>
         <Route path='/' element={<Home/>} ></Route>
         <Route path='/store' element={<Store/>}></Route>
         <Route path='/movies' element={<Movies/>}></Route>
         <Route path='/login_sign_up' element={<LoginSignUp/>}></Route>
      </Routes>      
    </>
  )
}

export default App
