import {Card} from 'react-bootstrap';
import blackAdam from '../assets/Images/Trending/black_adam.jpg'
const Trending = () => {
    return (
        <div className='trendingContainer'>
            <Card className="bg-dark text-white">
            <Card.Img src={blackAdam} alt="Black Adam" className='movieImage' />
                <Card.Title>Black Adam</Card.Title>
                <Card.Text>
                Seorang antihero dari Kahndaq, Black Adam, 
                bangkit setelah ribuan tahun terkurung untuk membawa keadilan
                 versinya sendiri, memicu bentrokan epik dengan para pahlawan 
                 Justice Society.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
        </div>
    )
}

export default Trending