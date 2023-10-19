import {readLink} from "../data/index";

import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/hero.png';

import { articleTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-4 pt-lg-5">
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
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Home Articles</h1>
              <p className="text-center">Tips & Trick Home Build and Decor.</p>
            </Col>
          </Row>
          <Row>
            {articleTerbaru.map((article) => {
              return (
                <Col key={article.id} className="shadow rounded">
                  <img src={article.image} alt="image-article" className="mb-5 rounded-top" />
                  <h5 className="mb-4 px-3">{article.title}</h5>
                  <p className="mb-4 px-3">{article.desc}</p>
                  <div className="ket d-flex justify-content-center py-3 mb-3">
                    <a href={readLink[0]}><button>{article.read}</button></a>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/morearticle")}>More Articles <i className="fa-solid fa-chevron-right ms-1"></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="design py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Popular Design</h1>
            </Col>
          </Row>
          <Row>
            <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true, }} breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm rounded">
                    <img src={data.Image} alt="design photo" className="popular-img" />
                    <div className="popular-exp py-3 px-1">
                      <h5 className="mb-1">{data.Title}</h5>
                      <p className="m-0">{data.desc}</p>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage