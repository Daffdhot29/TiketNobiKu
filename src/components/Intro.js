import { Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='introSection'>
          <Container className='text-white d-flex justify-content-center align-items-center'>
            <Row>
              <Col> 
                <div className='title'>Free Movie</div>
                <div className='title'>Watch your favorite movies for free</div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro;