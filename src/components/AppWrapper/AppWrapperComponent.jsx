import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { MainComponent } from "../MainComponent/MainComponent.jsx";
import { Footer } from "../Footer/Footer.jsx";

function AppWrapperComponent(){
    return(

        <div>
            <Header /> 
            <div className={"page-content"}>
                <Outlet />
            </div>            
            {/* <MainComponent /> */}            
            <Footer />                     
        </div>

    )
}

export {AppWrapperComponent}