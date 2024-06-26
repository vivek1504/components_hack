import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuroraBackgroundDemo } from './components/auroraImplementation'
import { Main } from './Pages/Main'
import { InfiniteMovingCardsDemo } from './components/inifiniteMoviingCardsImplementation'
import { NavbarDemo } from './components/NavbarImplementation'
import { GlobeDemo } from './components/GlobeImplementation'
import LoginForm11 from './components/Signup'
import { CardHoverEffectImplementation } from './components/CardHoverEffectImplementation'
import { StickyScrollRevealImplementation } from './components/StickyScrollImplementation'
import { TabsImplementation } from './components/TabsImplementation'
import { TracingBeamImplementation } from './components/TracingBeamImplementation'

function App() {
  return <div className='hide-scrollbar'>
   <BrowserRouter>
    <Routes>
      <Route element={<AuroraBackgroundDemo></AuroraBackgroundDemo>} path='/background'></Route>
      <Route element={<Main></Main>} path='/'> </Route>
      <Route element={<InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>} path='/moving'></Route>
      <Route element={<NavbarDemo></NavbarDemo>} path='/navbar'></Route>
      <Route element={<GlobeDemo></GlobeDemo>} path='/globe'></Route>
      <Route element={<LoginForm11></LoginForm11>} path='/login'></Route>
      <Route element={<CardHoverEffectImplementation></CardHoverEffectImplementation>} path='/hover'></Route>
      <Route element={<StickyScrollRevealImplementation></StickyScrollRevealImplementation>} path='/sticky'></Route>
      <Route element={<TabsImplementation></TabsImplementation>} path='/tabs'></Route>
      <Route element={<TracingBeamImplementation></TracingBeamImplementation>} path='/beam'></Route>
    </Routes>
  </BrowserRouter>
  </div>
}

export default App
