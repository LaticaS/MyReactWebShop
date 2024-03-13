import "./Pocetna.scss"

function Pocetna() {
    return(
        <div>
            <main>
        
        <a href="products.html" title="AKCIJSKI POPUSTI NA XL ARTIKLE 50%" target="_parent">
        <div class="div-banner">            
            <div class="div-text-banner">
                AKCIJSKI POPUSTI 50%
            </div>            
        </div>
        </a>  
      
        <section class="sect2">
            
            <div>
                <a href="products.html" target="_parent" id="link-u-naslovu">                
                <h2>ELEGANS 4 EVERYONE</h2>
                </a>              
            </div>                       
            <div id="div-kategorija-žene" title="Bogata ponuda odjeće za žene">
                <a href="women-products.html" target="_parent">
                <div id="ime-kategorije"><h3>ŽENE</h3></div>
                </a>               
            </div>
            <div id="div-kategorija-modni-dodaci" title="Upotpunite svoj stil ELegans modnim dodacima">
                <a href="modni-dodaci.html" target="_parent">
                <div id="ime-kategorije"><h3>MODNI DODACI</h3></div>
                </a>          
            </div>
            <div id="div-kategorija-muškarci" title="Bogat izbor odjeće za muškarce">
                <a href="men-products.html" target="_parent">
                <div id="ime-kategorije"><h3>MUŠKARCI</h3></div>
                </a>
            </div>           
        </section>       

        <section class="sect3">
            <div>
                <h2>POPULARNO</h2>
            </div>
            <div id="div-haljine" title="Haljine za dnevne i svečane prigode">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>HALJINE </h3></div>
                </a>
            </div>
            <div id="div-bluze" title="Bogata ponuda ženstvenih bluza">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>BLUZE </h3></div>
                </a>
            </div>
            <div id="div-kaputi" title="Topli kaputi za hladne dane">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>KAPUTI </h3></div>
                </a>
            </div>
            <div id="div-trenerke" title="Udobne trenirke za rekreaciju i odmor">
                <a href="products.html" target="_parent" id="link-u-naslovu">
                <div id="ime-kategorije"><h3>TRENIRKE </h3></div>
                </a>
            </div> 
        </section> 

    </main>

        </div>

    )
}

export{Pocetna}