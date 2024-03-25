import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Preporuke.scss";
import books from "../databooks.json";


function Preporuke() {
  return (
    <div className='preporuke-wrapper'>
        <h3>Moglo bi vas zanimati</h3> 
        <div className='card-wrapper'>

        {books && books.slice(8, 12).map( book => {
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

    {/** 
    <CardGroup>
      <Card className='card'>
        <Card.Img variant="top" src="https://fastly.picsum.photos/id/125/200/300.jpg?hmac=yLvRBwUcr6LYWuGaGk05UjiU5vArBo3Idr3ap5tpSxU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          <p>"naslov knjige"</p>
                <p><em>podnaslov</em></p>
                <p><strong> autor </strong></p>
                <p style={{padding:5, color:"red", fontSize:"larger"}}>cijena €</p>
          </Card.Text>          
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">DODAJ U KOŠARICU</Button>
        </Card.Footer>
      </Card>
      <Card className='card'>
        <Card.Img variant="top" src="https://fastly.picsum.photos/id/125/200/300.jpg?hmac=yLvRBwUcr6LYWuGaGk05UjiU5vArBo3Idr3ap5tpSxU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          <p>"naslov knjige"</p>
                <p><em>podnaslov</em></p>
                <p><strong> autor </strong></p>
                <p style={{padding:5, color:"red", fontSize:"larger"}}>cijena €</p>
          </Card.Text>          
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">DODAJ U KOŠARICU</Button>
        </Card.Footer>
      </Card>
      <Card className='card'>
        <Card.Img variant="top" src="https://fastly.picsum.photos/id/125/200/300.jpg?hmac=yLvRBwUcr6LYWuGaGk05UjiU5vArBo3Idr3ap5tpSxU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          <p>"naslov knjige"</p>
                <p><em>podnaslov</em></p>
                <p><strong> autor </strong></p>
                <p style={{padding:5, color:"red", fontSize:"larger"}}>cijena €</p>
          </Card.Text>          
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">DODAJ U KOŠARICU</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
     */}
    
    
    </div>
  );
}

export default Preporuke;