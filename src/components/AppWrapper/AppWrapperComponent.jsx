import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { MainComponent } from "../MainComponent/MainComponent.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";
import Newsletter from "../Newsletter/Newsletter.jsx";
import NavbarHamburger from "../NavbarHamburger.jsx";
import NavbarVertical from "../NavbarVertical.jsx";


function AppWrapperComponent(){
    return(
        <div>
            <NavbarHamburger />                    
            <Header /> 
            <div className={"page-content"}>
                <Toaster />
                <Outlet />
            </div>            
            {/* <MainComponent /> */}            
            <Newsletter />           
            <Footer />
            <NavbarVertical />                     
        </div>

    )
}

export {AppWrapperComponent}