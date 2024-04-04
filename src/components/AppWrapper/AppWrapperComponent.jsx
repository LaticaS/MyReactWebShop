import { Outlet } from "react-router-dom";
import { MainComponent } from "../MainComponent/MainComponent.jsx";
import { Toaster } from "react-hot-toast";
import Newsletter from "../Newsletter/Newsletter.jsx";
import NavbarHamburger from "../NavbarHamburger.jsx";
import NavbarVertical from "../NavbarVertical.jsx";


function AppWrapperComponent(){
    return(
        <div>
            <NavbarHamburger />
            <div className={"page-content"}>
                <Toaster />
                <Outlet />
            </div>            
            {/* <MainComponent /> */}            
            <Newsletter /> 
            <NavbarVertical />                     
        </div>

    )
}

export {AppWrapperComponent}