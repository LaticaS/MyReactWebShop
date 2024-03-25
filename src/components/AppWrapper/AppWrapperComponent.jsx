import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { MainComponent } from "../MainComponent/MainComponent.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";
import Newsletter from "../Newsletter/Newsletter.jsx";

function AppWrapperComponent(){
    return(

        <div>
            <Header /> 
            <div className={"page-content"}>
                <Toaster />
                <Outlet />
            </div>            
            {/* <MainComponent /> */} 
            <Newsletter />           
            <Footer />                     
        </div>

    )
}

export {AppWrapperComponent}