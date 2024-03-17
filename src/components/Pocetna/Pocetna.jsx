import "./Pocetna.scss"

function Pocetna() {
    return(
        <div>
            <main>
        
        <a href="products.html" title="AKCIJSKI POPUSTI 50%" target="_parent">
        <div class="div-banner">            
            <div class="div-text-banner">
                AKCIJSKI POPUSTI 50%
            </div>            
        </div>
        </a>  
      
        <section class="sect2">
            
            <div>
                <a href="products.html" target="_parent" id="link-u-naslovu">                
                <h2>BEST SELLING BOOKS</h2>
                </a>              
            </div>                       
            <div id="div-kategorija-žene" title="">
                <a href="women-products.html" target="_parent">
                <div id="ime-kategorije"><h3>KUHARICE</h3></div>
                </a>               
            </div>
            <div id="div-kategorija-modni-dodaci" title="">
                <a href="modni-dodaci.html" target="_parent">
                <div id="ime-kategorije"><h3>SELF-HELP</h3></div>
                </a>          
            </div>
            <div id="div-kategorija-muškarci" title="">
                <a href="men-products.html" target="_parent">
                <div id="ime-kategorije"><h3>BELETRISTIKA</h3></div>
                </a>
            </div>           
        </section>       

        <section class="sect3">
            <div>
                <h2>MOST POPULAR</h2>
            </div>
            <div id="div-haljine" title="">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>FANTASTIKA </h3></div>
                </a>
            </div>
            <div id="div-bluze" title="">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>BIOGRAFIJE </h3></div>
                </a>
            </div>
            <div id="div-kaputi" title="">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>STRIPOVI </h3></div>
                </a>
            </div>
            <div id="div-trenerke" title="">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>STRUČNA </h3></div>
                </a>
            </div> 
        </section> 

    </main>

        </div>

    )
}

export{Pocetna}