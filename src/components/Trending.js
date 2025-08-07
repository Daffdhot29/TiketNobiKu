import {Card, Col, Container, Row} from 'react-bootstrap';
import blackAdam from '../assets/Images/Trending/black_adam.jpg';
import menantuSInting from '../assets/Images/Trending/Menantu_sinting.jpg';
import elio from '../assets/Images/Trending/elio.jpg';
import blackPather from '../assets/Images/Trending/black_panther.jpg';
import miracle from '../assets/Images/Trending/miracle.jpg';
const Trending = () => {
    return (
        <div className='trendingContainer'>
            <Container>
                <Row>
                    <Col md = {4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center mb-3 movieImage">
                            <Card.Img src={blackAdam} alt="Black Adam"  className='images'/>
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
                    <Col md = {4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center mb-3 movieImage">
                            <Card.Img src={menantuSInting} alt="Menantu Sinting"  className='images'/>
                            <Card.Title className='text-center'>Menantu Sinting</Card.Title>
                            <Card.Text className='text-left'>
                            Saat keluarga bahagia kedatangan menantu baru, segalanya berubah menjadi kacau. 
                            Di balik senyumnya yang manis, menantu ini menyimpan rencana 
                            gila yang menguji kesabaran dan kewarasan seluruh keluarga. Siapakah sebenarnya dia?
                            </Card.Text>
                            <Card.Text className='text-lect'>Last updated 3 mins ago</Card.Text>
                        </Card>  
                    </Col>
                    <Col md = {4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center mb-3 movieImage">
                            <Card.Img src={elio} alt="Elio" className='images' />
                            <Card.Title className='text-center'>Elio</Card.Title>
                            <Card.Text className='text-left'>
                                menceritakan tentang Elio, seorang anak laki-laki berusia 11 tahun yang tidak sengaja terhubung dengan makhluk luar angkasa. 
                                Dalam kejadian aneh, Elio diculik dan dibawa ke galaksi jauh, di mana ia secara keliru dianggap sebagai pemimpin Bumi oleh 
                                sekelompok alien. Kini, Elio harus belajar menjadi pemimpin sejati sambil berusaha menemukan jalan pulang, 
                                menghadapi berbagai makhluk asing, dan menemukan jati dirinya di tengah dunia yang tidak dikenal.
                            </Card.Text>
                            <Card.Text className='text-lect'>Last updated 3 mins ago</Card.Text>
                        </Card>  
                    </Col>
                    <Col md = {4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center mb-3 movieImage">
                            <Card.Img src={blackPather} alt="blackPanther" className='images' />
                            <Card.Title className='text-center'>Black Panther</Card.Title>
                            <Card.Text className='text-left'>
                                Setelah kematian ayahnya, T Challa kembali ke tanah airnya, Wakanda, sebuah negara tersembunyi 
                                dengan teknologi paling maju di dunia, 
                                untuk dinobatkan sebagai raja. Namun, saat musuh lama muncul dan mengancam masa depan Wakanda, 
                                T Challa harus mengenakan identitas Black Panther dan berjuang demi rakyatnya, kehormatan, dan dunia.
                            </Card.Text>
                            <Card.Text className='text-lect'>Last updated 3 mins ago</Card.Text>
                        </Card>  
                    </Col>
                    <Col md = {4} className='movieWrapper'>
                        <Card className="bg-dark text-white text-center mb-3 movieImage">
                            <Card.Img src={miracle} alt="Miracle" className='images' />
                            <Card.Title className='text-center'>Miracle</Card.Title>
                            <Card.Text className='text-left'>
                                 Dodo Rozak, seorang ayah dengan keterbelakangan mental, sangat menyayangi putrinya, Kartika. Suatu hari, Dodo 
                                 dituduh melakukan kejahatan yang tidak ia lakukan dan dijebloskan ke penjara. Di dalam sel nomor 7, 
                                 para narapidana lain perlahan menyadari kebaikan hati Dodo dan 
                                 berusaha membantunya bertemu kembali dengan Kartika, menciptakan keajaiban di tengah ketidakadilan.
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