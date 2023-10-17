import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/hero.png';
import Article1 from '../assets/img/article1.jpg';
import Article2 from '../assets/img/article2.jpg';
import Article3 from '../assets/img/article3.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-4">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h3>Find your dream home design</h3>
              <p className="pb-4">The best place for Build and Renov your Home with our Professional & The simplest way to build your dream and best quality home.</p>
              <div className="search">
                <input type="text" className="form-control" placeholder="Have a question? Ask Now" />
                <button className="btn btn-primary">Search</button>
              </div>
            </Col>
            <Col lg="6">
              <img src={HeroImage} alt="hero image" className="ms-5" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="article w-100 min-vh-100">
        <Container>
          <Row className="article-text">
            <Col>
              <h1 className="text-center fw-bold">Articles</h1>
              <p className="text-center">Tips & Trick Home Build and Decor.</p>
            </Col>
          </Row>
          <Row className="article-img">
            <Col className="text-center">
              <img src={Article1} alt="article1" className="mb-5 rounded-top" />
            </Col>
            <Col className="text-center">
              <img src={Article2} alt="article2" className="mb-5 rounded-top" />
            </Col>
            <Col className="text-center">
              <img src={Article3} alt="article3" className="mb-5 rounded-top" />
            </Col>
            <Col className="text-center">
              <img src={Article1} alt="article4" className="mb-5 rounded-top" />
            </Col>
            <Col className="text-center">
              <img src={Article2} alt="article5" className="mb-5 rounded-top" />
            </Col>
            <Col className="text-center">
              <img src={Article3} alt="article6" className="mb-5 rounded-top" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage