import { Header } from "../Header/Header.jsx"
import { MainComponent } from "../MainComponent/MainComponent.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { Outlet } from "react-router-dom"

function AppWrapperComponent(){
    return(

        <div>
            <Header />
            <MainComponent />
            <Footer /> 
                    
        </div>

    )
}

export {AppWrapperComponent}