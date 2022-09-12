import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "关于我们",
  },

  {
    path: "/puzzles",
    display: "拼图选购",
  },
  {
    path: "/comments",
    display: "客户评价",
  },

  {
    path: "/contact",
    display: "联系我们",
  },
];

const socialLinks = [
  {
    url: "#",
    icon: "ri-weibo-fill",
  },
  {
    url: "#",
    icon: "ri-wechat-fill",
  },
  {
    url: "#",
    icon: "ri-window-fill",
  },
];


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="12" sm="12">
            <div className="footer__sec" >
              <div className="logo footer__logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-windy-line"></i>
                    <span>
                      Puzzle <br /> Mall
                    </span>
                  </Link>
                </h1>
              </div>
              <p className="footer__logo-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit provident veritatis ipsum vero voluptatem et. Blanditiis cumque laborum minus modi.
              </p>  
            </div>
            
          </Col>

          <Col lg="2" md="3" sm="12">
            <div className="mb-4 footer__sec" >
              <h5 className="footer__link-title ">服务</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="5" sm="12">
            <div className="mb-4 footer__sec">
              <h5 className="footer__link-title mb-4 ">联系我们</h5>
              <p className="office__info">地址： BIT Beijing / CityU HongKong</p>
              <p className="office__info">电话： +852 150-2330-2003</p>
              <p className="office__info">邮箱： chengwen_xiao@foxmail.com</p>
              <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
              </div>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4 footer__sec">
              <h5 className="footer__link-title">订阅</h5>
              <p className="section__description footer__latest-news">即刻获取Puzzle Mall最新消息</p>
              <div className="newsletter">
                <input type="email" placeholder="订阅邮箱" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Raven Xiao. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
