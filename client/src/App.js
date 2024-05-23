
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
