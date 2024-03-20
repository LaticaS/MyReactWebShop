import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { MainComponent } from "../MainComponent/MainComponent.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";

function AppWrapperComponent(){
    return(

        <div>
            <Header /> 
            <div className={"page-content"}>
                <Toaster />
                <Outlet />
            </div>            
            {/* <MainComponent /> */}            
            <Footer />                     
        </div>

    )
}

export {AppWrapperComponent}