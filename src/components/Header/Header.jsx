import "./Header.scss";

function Header() {
    return(
        <div>                      
        <header>            
                <section class="head1">          
                <div class="div-trazilica">                    
                    <form action="action/page">
                      <input type="text" name="search" placeholder="Pretraži shop" id="input-header-pretrazi" />                                       
                    </form>
                     <div id="div-ikonica-search">
                    <img src=" " alt="Traži" title="Traži" width="30px" id="search" /> 
                    </div> 
                </div>                
                <div>                   
                    <a href="../cart.html" target="_parent"><img src="../images/cart-3-svgrepo-com.svg" alt="Košarica" width="30px" height="30px" title="Moja košarica" id="Kosara" /></a>
                </div> 
                <div><a href="mailto:info@booki.hr" class="nav1" target="_blank" title="Mail to: info@booki.hr">info@booki.hr</a></div> 
                <div><a href="tel:+385022123340" class="nav1" target="_blank" title="Phone Booki: Croatia +385">022/123 340</a></div>                
                <div>                                       
                    <a href="https://www.facebook.com/" target="_blank"><img src="../images/facebook-outline-svgrepo-com.svg" width="30px" height="30px" alt="Facebook" title="Facebook" id="Face" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src="../images/instagram-svgrepo-com.svg" width="30px" height="30px" alt="Instagram" title="Instagram" id="Insta" /></a>
                    <a href="https://twitter.com/" target="_blank"><img src="../images/twitter-svgrepo-com.svg" width="30px" height="30px" alt="Twitter/X" title="Twitter/X" id="Twitt" /></a>
                </div>         
            </section>            
            <section class="head2">
               <div class="div-Logo"><a href="../index.html" target="_parent"><img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/School-Clipart/Books_Transparent_PNG_Clip_Art_Image.png?m=1523965454" id="logo" alt="Logo Booki" title="Prodaja knjiga Booki" width="100px" height="100px" /></a></div> 
                <a href="/" class="nav2" title="Booki / Početna"><div class="div-navi">HOME</div></a>
                <a href="../products.html" class="nav2" title="Pogledajte ponudu" target="_parent"><div class="div-navi">PONUDA</div></a>                
                <a href="../contact.html" class="nav2" title="Kontaktirajte nas" target="_parent"><div class="div-navi">KONTAKT</div></a>
                <a href="../checkout.html" class="nav2" title="Narudžba" target="_parent"><div class="div-navi">NARUDŽBA</div></a>                        
            </section>
            
        </header> 
        </div>
    )
}
export {Header}

//https://www.freepnglogos.com/uploads/book-png/stack-books-png-6.png
//https://freepngimg.com/thumb/cactus/36903-7-cactus-transparent-image.png