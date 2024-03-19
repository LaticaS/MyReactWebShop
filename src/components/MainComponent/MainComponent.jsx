import { Outlet } from "react-router-dom";
import { Pocetna } from "../Pocetna/Pocetna.jsx";
import { ProizvodBoot } from "../Product/ProizvodBoot.jsx";
import {Proizvodi} from "../Product/Proizvodi.jsx";
import {Kosarica} from "../Kosarica/Kosarica.jsx";


function MainComponent(){
    return(     
        <div>  
            <Kosarica />           
                     
            
            <br /> 

           {/** 
            *  <Pocetna /> 
            * 
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