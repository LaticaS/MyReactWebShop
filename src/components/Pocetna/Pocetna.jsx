import { Link } from "react-router-dom";
import "./Pocetna.scss"
import {toast} from "react-hot-toast"


function Pocetna() {
    return(
        <div>
            <main>
        <Link to="/products" title="AKCIJSKI POPUSTI 50%">        
        <div class="div-banner">            
            <div class="div-text-banner">
                AKCIJSKI POPUSTI 50%
            </div>            
        </div>        
        </Link> 
      
        <section class="sect2">            
            <div>
            <Link to="/products" id="link-u-naslovu">                               
                <h2>BEST SELLING BOOKS</h2>                
            </Link>             
            </div>                       
            <div id="div-kategorija-žene" title="">
            <button onClick={()=> toast.success("Hello world")}>TOAST</button>
                <Link to="/products">                
                <div class="ime-kategorije">KUHARICE</div>
                </Link>             
            </div>
            <div id="div-kategorija-modni-dodaci" title="">
            <Link to="/products">
                <div class="ime-kategorije">SELF-HELP</div>
            </Link>             
            </div>
            <div id="div-kategorija-muškarci" title="">
            <Link to="/products">
                <div class="ime-kategorije">TRILERI</div>
            </Link>    
            </div>           
        </section>       

        <section class="sect3">
            <div>
            <Link to="/products" id="link-u-naslovu">
                <h2>MOST POPULAR</h2>
            </Link>
            </div>
            <div id="div-haljine" title="">
                <Link to="/products">
                <div class="ime-kategorije">FANTASY</div>
                </Link>
            </div>

            <div id="div-bluze" title="">
            <Link to="/products">
                <div class="ime-kategorije">BIOGRAFIJE</div>
            </Link>  
            </div>            
            <div id="div-kaputi" title="">
            <Link to="/products">
                <div class="ime-kategorije">STRIPOVI</div>
            </Link>
            </div>
            <div id="div-trenerke" title="">
            <Link to="/products">
                <div class="ime-kategorije">STRUČNA</div>
            </Link>
            </div> 
        </section> 

    </main>

        </div>

    )
}

export{Pocetna}