import { Navbar, Container, Nav } from "react-bootstrap";
const NavigationBar = () => {
    return (
        <Navbar variant="light" className="mb-4 shadow navTrends">
            <Container>
                <Navbar.Brand href="#home"> Tontonan-Ku </Navbar.Brand>
                <Nav className="justify-content-end ">
                    <Nav.Link href="#trending">Trending</Nav.Link>
                    <Nav.Link href="#action"> Action </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;