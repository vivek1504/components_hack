import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuroraBackgroundDemo } from './components/auroraImplementation'
import { Main } from './Pages/Main'
import { InfiniteMovingCardsDemo } from './components/inifiniteMoviingCardsImplementation'
import { NavbarDemo } from './components/NavbarImplementation'

function App() {
  return <div className='hide-scrollbar'>
   <BrowserRouter>
    <Routes>
      <Route element={<AuroraBackgroundDemo></AuroraBackgroundDemo>} path='/background'></Route>
      <Route element={<Main></Main>} path='/'> </Route>
      <Route element={<InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>} path='/moving'></Route>
      <Route element={<NavbarDemo></NavbarDemo>} path='/navbar'></Route>
    </Routes>
  </BrowserRouter>
  </div>
}

export default App
