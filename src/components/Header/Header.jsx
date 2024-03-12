import "./Header.scss"

function Header() {
    return(
        <div>                      
        <header>            
                <section class="head1">                                    
                <div class="div-trazilica">
                    {/**
                    <form action="action/page">
                      <input type="text" name="search" placeholder="Pretraži shop" id="input-header-pretrazi">                                       
                    </form>   
                    <div id="div-ikonica-search">
                    <img src="../images/search-svgrepo-com.svg" alt="Traži" title="Traži" width="30px" height="30px" id="search"> 
                    </div>
                    */}
                </div>
                <div>
                    {/**
                    <a href="../cart.html" target="_parent"><img src="../images/cart-3-svgrepo-com.svg" alt="Košarica" width="30px" height="30px" title="Moja košarica" id="Kosara"></a>
                 */}
                    </div> 
                <div><a href="mailto:info@elegans.hr" class="nav1" target="_blank" title="Mail to: info@elegans.hr">info@elegans.hr</a></div> 
                <div><a href="tel:+385022123340" class="nav1" target="_blank" title="Phone ELegans: Croatia +385">022/123 340</a></div>                
                <div> 
                    {/**                   
                    <a href="https://www.facebook.com/" target="_blank"><img src="../images/facebook-outline-svgrepo-com.svg" width="30px" height="30px" alt="Facebook" title="Facebook" id="Face"></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src="../images/instagram-svgrepo-com.svg" width="30px" height="30px" alt="Instagram" title="Instagram" id="Insta"></a>
                    <a href="https://twitter.com/" target="_blank"><img src="../images/twitter-svgrepo-com.svg" width="30px" height="30px" alt="Twitter/X" title="Twitter/X" id="Twitt"></a>
                */} 
                    </div>         
            </section>
            <section class="head2">
               {/** <div class="div-Logo"><a href="../index.html" target="_parent"><img src="../images/Logo.png" id="logo" alt="Logo Elegans New Fashion" title="Nova moda ELegans" width="130px" height="60px"></a></div> */} 
                <a href="../index.html" class="nav2" title="ELegans / Početna" target="_parent"><div class="div-navi">HOME</div></a>
                <a href="../products.html" class="nav2" title="Pregledajte ponudu odjeće za žene i muškarce" target="_parent"><div class="div-navi">PONUDA</div></a> 
                <a href="../about.html" class="nav2" title="Upoznajte nas" target="_parent"><div class="div-navi">O NAMA</div></a>  
                <a href="../blog.html" class="nav2" title="Doznajte modne aktualnosti" target="_parent"><div class="div-navi">BLOG</div></a>  
                <a href="../contact.html" class="nav2" title="Kontaktirajte nas" target="_parent"><div class="div-navi">KONTAKT</div></a>
                <a href="../checkout.html" class="nav2" title="Narudžba" target="_parent"><div class="div-navi">NARUDŽBA</div></a>                        
            </section>
            
        </header> 
        </div>
    )
}
export {Header}