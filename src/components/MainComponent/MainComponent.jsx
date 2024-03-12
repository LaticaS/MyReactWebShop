import "./MainComponent.scss";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MainComponent(){
    return(     
        <div>   
            <h2>Main Component</h2>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://njsna.org/wp-content/uploads/2021/02/1140-med-marijuana-caduceus.imgcache.rev873985b7234d2a2df9a09f5cefacea57-300x172.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/006/796/636/small/cannabis-marijuana-weed-green-leaf-medical-ganja-cannabis-illustration-isolated-on-green-background-free-vector.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>      
    </CardGroup>
    </div>  
    )
}

export{MainComponent}