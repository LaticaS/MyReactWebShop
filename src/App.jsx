import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header.jsx';
import { MainComponent } from './components/MainComponent/MainComponent.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent.jsx';
import { Product } from './components/Product/Product.jsx';
import { SingleProduct } from './components/Product/SingleProduct.jsx';
import { Home } from './components/Home/Home.jsx';
import { Outlet } from 'react-router-dom';

function App() { 

  return (
    <>  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<AppWrapperComponent />}>
    {/**  <Route index element={<Home />} />   */}
      

      {/** 
      <Route path="/contact" element={
      <Page title={"Contact"}
      description={"Lorem ipsum"}
       />
       }
       />
       <Route path="/about" element={<Page />} />

       <Route path="/product" element={<Outlet />} >
       <Route index element={<ProductList />} />
        <Route path="/product/:id" element={<DetailedProductView />} />
        </Route>

        */}

      </Route> 
      
       </Routes> 
      </BrowserRouter>        
    </>
  )
}

export default App
