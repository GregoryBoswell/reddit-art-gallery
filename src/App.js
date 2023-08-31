import Nav from './Nav';
import Gallery from './components/Gallery/Gallery';
import Favorites from './components/Favorites/Favorites';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={ <Nav/> } >

          <Route path='' element={ <Navigate to='/gallery' /> } />
          <Route path='/gallery' element={ <Gallery /> } />
          <Route path='/favorites' element={ <Favorites /> } />
          
        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App;
