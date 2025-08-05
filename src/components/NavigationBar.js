import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> TiketNobiku </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="#trending">Trending</Nav.Link>
                    <Nav.Link href="#action"> Action </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;