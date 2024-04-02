import "./Placanje.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Placanje() {
    return (
        <>
        <h1>Plaćanje</h1> 
        <div className="placanje-wrapper">      
            
            <div className="adresa-polje">
                <h2>Unesite adresu za dostavu</h2>

                <form action="">

            <input type="text" id="ime" name="ime" placeholder="Upišite ime" className="ime" />
            <input type="text" id="prezime" name="prezime" placeholder="Upišite prezime" className="prezime" />
            <br />
            <input type="email" id="mail" name="email" placeholder=" Upišite email" className="email" /> 
            <input type="phone" id="phone" name="phone" placeholder=" Upišite telefon" className="phone" />
            <br />
            <input type="text" id="ulica" name="ulica" placeholder="Upišite ime ulice" className="ulica" /> 
            <input type="text" id="kucni-broj" name="kucni-broj" placeholder="Upišite kućni broj" className="kucniBroj" />
            <br />
            <textarea  name="Napomena"
             placeholder="Napomena dostavljaču: broj kata, stana i sl. (neobavezno)"
             rows={4}
             cols={30} />              

            <p>
                <input type="checkbox" value="obavijesti-mailom" name="privola-obavijesti-mailom" id="checkbox" />
                <small>Želim primati informacije o pogodnostima i novim proizvodima putem emaila.</small>
            </p>

            <input type="text" id="grad" name="grad" placeholder="Grad" className="grad" />            
            <input type="text" id="postanski-broj" name="postanski-broj" placeholder="Poštanski broj" className="postanskiBroj" />
            <br />
            <br />
            <input type="text" id="drzava" name="drzava" placeholder="Država" className="drzava" />
            <br /> 
            </form> 
      </div>

      <div className="placanje-sidebar">

      <div className="pregled-narudzbe-polje">
        <h2>Pregled vaše narudžbe</h2>
        <table>
                <thead>
            <tr>
                    <th>Proizvod</th>
                    <th>Količina</th>
                    <th>Cijena</th>
                    <th>Ukupna cijena</th>                    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <img src="https://znanje.hr/product-images/35948cb4-24d1-4ee6-b122-e555bb318f64.jpg" alt="" /> 
                    <p>"Addition and Subtraction"</p>
                    </td>
                    <td>
                    1
                    </td>
                    <td>5 €</td>
                    <td>5 €</td>                    
                </tr>
                </tbody>
                <tfoot>
                <tr>                                       
                    <td className="ukupnaCijena" colSpan="4">
                        <p>Zbroj košarice: €</p>
                        <p>Standardna dostava (DPD Croatia): 3,50 €</p>                       
                    </td>                   
                </tr>
                <tr>
                    <td className="ukupnaCijena" colSpan="4">
                    <p>UKUPNA CIJENA: €</p>
                    </td>
                </tr>
                </tfoot>             
            </table>      
      </div>

      <div className="nacin-placanja-polje">
        <h2>Izaberite način plaćanja</h2>
        <div className="div-forme-placanja">
        <form action="">
            <input type="radio" value="kartice" name="nacin-placanja" id="karticama" />
            <label htmlFor="karticama">Plaćanje karticama putem WSPay sustava</label>
            <br />
            <input type="radio" value="uplatnica" name="nacin-placanja" id="uplatnicom" />
            <label htmlFor="uplatnicom">Plaćanje općom uplatnicom / Internet bankarstvom</label>
            <br />
            <input type="radio" value="pouzece" name="nacin-placanja" id="pouzecem" />
            <label htmlFor="pouzecem">Plaćanje pouzećem kurirskoj službi prilikom dostave</label>
            <br />            
        </form>
        </div>       

      </div>

      <button type="submit" name="Narucujem">Naručujem</button> 
      <p>
      <small>
      Pritiskom na gumb "Naručujem" slažete se sa Općim uvjetima korištenja stranice i pristajete na korištenje Vaših osobnih podataka sukladno uvjetima web stranice.
      </small>
      </p>
      </div>

      <div className="div-buttoni">
        <Link to="/cart"><Button>⪡ POVRATAK NA KOŠARICU</Button></Link>
      </div>  

          
      </div>
        </>

    )
}
export {Placanje}