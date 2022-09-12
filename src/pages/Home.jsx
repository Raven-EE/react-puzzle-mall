import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindPuzzleForm from "../components/UI/FindPuzzleForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import puzzleData from "../assets/data/puzzleData";
import commentData from "../assets/data/commentData";
import PuzzleItem from "../components/UI/PuzzleItem";
import Testimonial from "../components/UI/Testimonial";

import CommentList from "../components/UI/CommentList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= slider =========== */}
      <section className="p-0 hero__slider-section">

        {/* slider */}
        <HeroSlider />

        {/* 选购模块 */}
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__puzzles-left">
                  <h2>Find your best puzzle here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                {/* 表单详情 */}
                <FindPuzzleForm />
              </Col>
            </Row>
          </Container>
        </div>

      </section>


      {/* =========== 关于我们 section ================ */}
      <AboutSection />


      {/* ========== 专业服务 section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">专业服务</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =========== 团队介绍 section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">团队介绍</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>


      {/* =========== 畅销拼图 section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">畅销拼图</h2>
            </Col>

            {puzzleData.slice(0, 6).map((item) => (
              <PuzzleItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =============== 客户评价 section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our</h6>
              <h2 className="section__title">客户评价</h2>
            </Col>

            {commentData.slice(0, 3).map((item) => (
              <CommentList item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>


    </Helmet>
  );
};

export default Home;
