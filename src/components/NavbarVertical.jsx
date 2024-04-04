import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavbarVertical() {
  return (
    <>
    <Nav className='flex-row justify-content-around' style={{backgroundImage:"linear-gradient(gold, orange)"}}> 
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link eventKey="link-2">
        <Link to="/contact" className='text-decoration-none text-dark'>
          Kontakt
          </Link>
          </Nav.Link> 
      <Nav.Link href="/home"><Link to="/uvjeti" className='text-decoration-none text-dark'>Opći uvjeti</Link></Nav.Link>
      <Nav.Link eventKey="link-1"><Link to="/uvjeti-kupnje" className='text-decoration-none text-dark'>Uvjeti kupnje</Link></Nav.Link>
      <Nav.Link eventKey="link-2"><Link to="/dostava"className='text-decoration-none text-dark' >Uvjeti dostave</Link></Nav.Link>         
    </Nav>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home"><Link to="/"className='text-decoration-none text-dark' >Home/Početna</Link></Nav.Link>
      <Nav.Link eventKey="link-1"><Link to="/about" className='text-decoration-none text-dark'>O nama</Link></Nav.Link>
      <Nav.Link eventKey="link-2"><Link to="/products" className='text-decoration-none text-dark'>Knjige</Link></Nav.Link>
      <Nav.Link eventKey="link-2"><Link to="/cart" className='text-decoration-none text-dark'>Košarica</Link></Nav.Link>          
    </Nav>    
    </Nav>

    <Nav defaultActiveKey="/home" className="flex-row align-items-center justify-content-around" style={{backgroundColor:"orangered"}}>
      <Nav.Link href="/home">
        <Link to="mailto:info@booki.hr" target='blank' title='Mail to: info@booki.hr' className='text-decoration-none text-dark'>
      info@booki.hr
        </Link>
        </Nav.Link>
      <Nav.Link eventKey="link-1">
        <Link to="tel:+385022123340" target='blank' title='Phone Booki: Croatia +385' className='text-decoration-none text-dark'>
      022/123 340
        </Link>
        </Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        <Link className='text-decoration-none text-dark'>
        OIB: 12345678901
        </Link>
      </Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        <Link className='text-decoration-none text-dark'>
        Preporoda 3, 22000 Šibenik
        </Link>
        </Nav.Link>        
    </Nav> 

    <Nav defaultActiveKey="/home" className="flex-row justify-content-around" style={{background:"green"}}>
      <Nav.Link eventKey="disabled" disabled>
        design@LaticaS
      </Nav.Link>
    </Nav>
    </>
  );
}

export default NavbarVertical;