import './App.css'
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import CartPage from './Pages/CartPage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import FavouritesPage from './Pages/FavouritesPage.jsx';
import Layout from './Layout.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';

function App() {
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ShoppingCart' element={<CartPage/>}/>
          <Route path='/Profile' element={<ProfilePage/>}/>
          <Route path='/Favourites' element={<FavouritesPage/>}/>
          <Route path='/Error404' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
