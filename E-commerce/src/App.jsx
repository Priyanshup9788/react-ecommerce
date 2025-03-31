import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
