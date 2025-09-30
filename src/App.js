import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Nav from './Nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Calculator from './pages/Calculator';
import Adobo from './pages/Adobo';

const NavBarLayout = () => {
  return(
  <>
    <Nav />
    <Outlet />
  </>
  )
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<NavBarLayout />}>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/portfolio" element={<Portfolio/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Calculator" element={<Calculator/>}></Route>
          <Route exact path="/Adobo" element={<Adobo/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;