import "./Footer.scss";

function Footer(){
    return(
        <div>
            <footer>
                <div class="div-foot">
                    <ul>
                    <li><a href="../products.html" target="_parent">Knjige</a></li> 
                    <li><a href="../cart.html" target="_parent">Košarica</a></li>                   
                    </ul>
                </div>

                <div class="div-foot">
                    <ul>
                        <li><a href="../index.html" target="_parent">Home / Početna</a></li>                                                
                        <li><a href="../contact.html" target="_parent">Kontakt</a></li>
                    </ul>
                    
                </div>                

                <div class="div-foot">
                    <ul>
                        <li><a href="tel:+385022123340" target="_blank">022/123 456</a></li>
                        <li><a href="../contact.html" target="_blank">OIB: 12345678901</a></li>
                        <li><a href="mailto:info@elegans.hr" target="_blank">info@booki.hr</a></li>
                        <li><a href="../contact.html" target="_blank">Preporoda 3, 22000 Šibenik</a></li>
                    </ul>   
                </div>

                {/** 

                <div class="div-foot">                                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.7798913897095!2d15.918575200563454!3d43.70511174747695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1335251a14dd3e07%3A0x1bb86dab00ef522!2sTommy!5e0!3m2!1shr!2shr!4v1703889267101!5m2!1shr!2shr" width="300vw" height="130vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div> 

                */}

                <div class="LaticaS">Izrada: LaticaS, Trokut 2024.</div>             
        </footer>  

        </div>
    )
}
export {Footer}