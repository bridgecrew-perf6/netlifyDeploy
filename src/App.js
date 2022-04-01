import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Contact from './Contact';
// import Home from './Home';
// import About from './About';
//import Test1 from './Test1';

//const Test1 = React.lazy(()=> import('./Test1'))
//const Test2 =React.lazy(()=>import('./Test2'))

const Home  = React.lazy(()=>import('./Home'))
const About  = React.lazy(()=>import('./About'))
const Contact  = React.lazy(()=>import('./Contact'))



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>

<Routes> 
<Route path='/' element={<Home></Home>}>Home</Route>
<Route path='about' element={<About></About>}>About</Route>
<Route path='/contact' element={<Contact></Contact>}>Contact</Route>
</Routes>
      </Suspense>

      
      
      </BrowserRouter>



    </div>
  );
}

export default App;
