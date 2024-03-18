import { Link } from "react-router-dom";
import "./Pocetna.scss"

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
                <Link to="/products">                
                <div id="ime-kategorije"><h3>KUHARICE</h3></div>
                </Link>             
            </div>
            <div id="div-kategorija-modni-dodaci" title="">
            <Link to="/products">
                <div id="ime-kategorije"><h3>SELF-HELP</h3></div>
            </Link>             
            </div>
            <div id="div-kategorija-muškarci" title="">
            <Link to="/products">
                <div id="ime-kategorije"><h3>BELETRISTIKA</h3></div>
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
                <div id="ime-kategorije"><h3>FANTASTIKA </h3></div>
                </Link>
            </div>
            <div id="div-bluze" title="">
            <Link to="/products">
                <div id="ime-kategorije"><h3>BIOGRAFIJE </h3></div>
            </Link>  
            </div>
            <div id="div-kaputi" title="">
            <Link to="/products">
                <div id="ime-kategorije"><h3>STRIPOVI </h3></div>
            </Link>
            </div>
            <div id="div-trenerke" title="">
            <Link to="/products">
                <div id="ime-kategorije"><h3>STRUČNA </h3></div>
            </Link>
            </div> 
        </section> 

    </main>

        </div>

    )
}

export{Pocetna}