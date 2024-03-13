import "./MainComponent.scss";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Outlet } from "react-router-dom";
import { Pocetna } from "../Pocetna/Pocetna.jsx";

function MainComponent(){
    return(     
        <div>  
          <Pocetna />
                     
            <h2>Main Component</h2>
            <img src="https://media.tenor.com/OCAVH-SFsM8AAAAe/it%27s-fine-im-fine.png" />
            <p>Šiz paragraf za šiz stanje</p>   

    <Outlet />
    </div>  
    )
}

export{MainComponent}