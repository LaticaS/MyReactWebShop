import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Preporuke.scss";
import books from "../databooks.json";

// Funkcija za miješanje niza
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Prije mapiranja, miješamo niz knjiga i zatim uzimamo prvih 4 nasumičnih knjiga
function Preporuke() { 
  return (
    <div className='preporuke-wrapper'>
        <h3>Moglo bi vas zanimati</h3> 
        <div className='card-wrapper'>
        
        {books && shuffleArray(books).slice(0, 4).map( book => {
                return (                                                                           
                <Card className='card' style={{ width: '18rem' }} key={book.id}>
                    <a href="" target="_blank" title="Detaljnije">
                    <Card.Img variant='top' src={book.img} alt="book cover" /> 
                    </a> 
                    <Card.Body>  
                    <Card.Text>         
                <p>"{book.title}"</p>
                <p><em>{book.subtitle}</em></p>
                <p><strong> {book.author} </strong></p>
                <p style={{padding:5, color:"red", fontSize:"larger"}}>{book.price} €</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button onClick={() => dodajKosarici(book)}>DODAJ U KOŠARICU</Button>
                </Card.Footer>
            </Card> 
                            
                );
            })
            } 
             </div>     
    
    </div>
  );
}

export default Preporuke;