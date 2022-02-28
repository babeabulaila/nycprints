import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function NavBar() {
    let navigate = useNavigate();

  return (
    <Navbar>
      <Container>
        <div className="nav-div">
          <Navbar.Brand href="/">NYC Printz {" "}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="drop-down">

            <div class="container" className="nav-buttons">
              <Nav className="me-auto">
                <Nav.Link className="nav-but" href="/">Home</Nav.Link>
                <Nav.Link className="nav-but" href="/artists">Artists</Nav.Link>
              </Nav>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar