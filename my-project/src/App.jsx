import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/login' element={<Login />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
