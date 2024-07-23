import { Navbar, Nav, Container } from 'react-bootstrap';



function NavbarInicio(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand onClick={()=>{props.soloinicio()}}>Tecno-Empresa</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={()=>{props.clickparaverTablaFormulario()}}>Ver y Modificar Productos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );


}
export default NavbarInicio;