import {Card, Col, Container, Row} from 'react-bootstrap';
import blackAdam from '../assets/Images/Trending/black_adam.jpg'
const Trending = () => {
    return (
        <div className='trendingContainer'>
            <Container>
                <Row>
                    <Col className='movieImage'>
                        <Card className="bg-dark text-white text-center mb-3 movieImage">
                        <Card.Img src={blackAdam} alt="Black Adam"  />
                        <Card.Title className='text-center'>Black Adam</Card.Title>
                        <Card.Text className='text-left'>
                        Seorang antihero dari Kahndaq, Black Adam, 
                        bangkit setelah ribuan tahun terkurung untuk membawa keadilan
                        versinya sendiri, memicu bentrokan epik dengan para pahlawan 
                        Justice Society.
                        </Card.Text>
                        <Card.Text className='text-lect'>Last updated 3 mins ago</Card.Text>
                        </Card>  
                        </Col>
                </Row>
        </Container>
            
        </div>
    )
}

export default Trending