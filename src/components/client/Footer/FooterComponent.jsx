import { Container, Row, Col } from "react-bootstrap"
// import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col>
            <h3 className="fw-bold">Rinnovation.</h3>
            <p className="fw-bold">--------------------------</p>
          </Col>
          <Col lg="3">
            <button className="button-footer mx-1 px-2">Sign in</button>
            <button className="button-footer mx-1 px-2">Sign Up</button>
            <div className="social mt-3">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>&copy; Copyright {new Date().getFullYear} by Wisanggeni, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent