import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

import aboutImg from "../assets/all-images/contact-img.jpg";


const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="联系我们" />
      <section>
        <Container>
          <Row>
            <Col lg="5" md="12" sm='12' className="contact__img-box">
              <img src={aboutImg} alt="" className="contact__img" />
            </Col>

            <Col lg="7" md="12" sm='12'>
              <Form className="contact__form-box"> 
                <FormGroup className="contact__form">
                  <Input placeholder="姓名" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="邮箱" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="12"
                    placeholder="输入您的信息..."
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  发送消息
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <section></section>
    </Helmet>
  );
};

export default Contact;
