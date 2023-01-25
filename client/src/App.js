// import logo from "./logo.svg";
import "./stylesheets/App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function App() {

  useEffect( () => {
    themeChange(false)
  }, [])

  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route index element={ <Home /> } />
          <Route path='/signup' element={ <SignupForm /> } />
        </Routes>
      </div>
    </>
  )
}

export default App;
