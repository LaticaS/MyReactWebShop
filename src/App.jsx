import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header.jsx';
import { MainComponent } from './components/MainComponent/MainComponent.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppWrapperComponent } from './components/AppWrapper/AppWrapperComponent.jsx';
import { Product } from './components/Product/Product.jsx';
import { SingleProduct } from './components/Product/SingleProduct.jsx';
import { Home } from './components/Home/Home.jsx';
import { Outlet } from 'react-router-dom';
import { Pocetna } from './components/Pocetna/Pocetna.jsx';
import { Proizvodi } from './components/Product/Proizvodi.jsx';
import { Kosarica } from './components/Kosarica/Kosarica.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import { Kontakt } from './components/Kontakt/Kontakt.jsx';
import { Placanje } from './components/Placanje/Placanje.jsx';
import { Ruta } from './components/Ruta.jsx';
import { PojediniProizvod } from './components/Product/PojediniProizvod.jsx';
import { About } from './components/About/About.jsx';
import { OpciUvjeti } from './components/OpciUvjeti/OpciUvjeti.jsx';
import { UvjetiKupnje } from './components/UvjetiKupnje/UvjetiKupnje.jsx';
import { Dostava } from './components/Dostava/Dostava.jsx'; 


function App() { 

  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppWrapperComponent />} >
            <Route index element={<Pocetna />} />
            <Route path='/products' element={<Proizvodi />} />
            <Route path='/cart' element={<Kosarica />} />
            <Route path='/contact' element={<Kontakt />} />
            <Route path='/placanje' element={<Placanje />} />
            <Route path='/pojedini' element={<PojediniProizvod />} /> 
            <Route path='/about' element={<About />} />
            <Route path='/uvjeti' element={<OpciUvjeti />} />
            <Route path='/dostava' element={<Dostava />} />            
            <Route path='/kupnje' element={<UvjetiKupnje />} />

            <Route path="*" element={<ErrorPage />} />            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

{/** 
  <div>
    <AppWrapperComponent />
     

 * 
 * 
    <BrowserRouter>
    <Routes>
      <Route>
        
      </Route>
     <Route path="/" element={<AppWrapperComponent />}>
      <Route index element={<Home />} />   */}
      

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

        

      </Route> 

      */}

      {/** 
      <Route path='/'>
        <Home />
      </Route>

      <Route path='/about'>
        <About />
      </Route>
      
      
       </Routes> 
      </BrowserRouter>  
            

</div>  

  )
  */}

}

export default App
