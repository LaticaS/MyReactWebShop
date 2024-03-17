import "./MainComponent.scss";
import { Outlet } from "react-router-dom";
import { Pocetna } from "../Pocetna/Pocetna.jsx";
import { ProizvodBoot } from "../Product/ProizvodBoot.jsx";
import {Proizvodi} from "../Product/Proizvodi.jsx";


function MainComponent(){
    return(     
        <div>             
            <Pocetna />           
            
            <br /> 

           {/** 
            * <Proizvodi /> 
            *            * 
            <img src="https://media.tenor.com/OCAVH-SFsM8AAAAe/it%27s-fine-im-fine.png" />
            <p>Šiz paragraf za šiz stanje</p>   
            
            */} 
                      
       <Outlet /> 
    </div>  
    )
}

export{MainComponent}