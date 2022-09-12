import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import about2Img from "../assets/all-images/about-2.jpg";
import Testimonial from "../components/UI/Testimonial";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="关于我们" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={about2Img} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12" className="about__page-content-fa">
              <div className="about__page-content">
                <h2 className="section__title">
                  我们将为您提供收藏级品质拼图
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptates, quidem repellendus ipsa repudiandae, rem quisquam magni minima aliquam nihil facilis, deleniti harum corporis nam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tempore, repellendus non dignissimos, ipsum error saepe cupiditate exercitationem tenetur et quae minus nam hic ipsa, pariatur provident reiciendis? Ea, fuga.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">加入我们</h6>
                    <h4>+852 150-2330-2003</h4>
                  </div>
                </div>
              </div>
            </Col>
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

      <section></section>
    </Helmet>
  );
};

export default About;
