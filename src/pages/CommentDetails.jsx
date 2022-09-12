import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import commentData from "../assets/data/commentData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/comment-details.css";

const CommentDetails = () => {
  const { slug } = useParams();
  const comment = commentData.find((comment) => comment.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [comment]);

  return (
    <Helmet title={comment.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="comment__details">
                <img src={comment.imgUrl} alt=""/>
                <h2 className="section__title mt-4">{comment.title}</h2>

                <div className="comment__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="comment__author">
                    <i class="ri-user-line"></i> {comment.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {comment.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {comment.time}
                  </span>
                </div>

                <p className="section__description comment__justify">{comment.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="fw-bold mb-5">评论区</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">小北</h6>
                    <p className="section__description mb-0">2022-09-01</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquam voluptas veniam velit ex qui repellendus, molestiae inventore molestias illum aspernatur in. Libero consequuntur ab adipisci fuga odio?
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> 回复
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4 className="fw-bold">写评论</h4>
                  <p className="section__description">
                    您需要先登录才可以进行评论
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="姓名" />
                      <Input type="email" placeholder="邮箱" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="评语..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      发布评论
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">最新评论</h5>
              </div>
              {commentData.map((item) => (
                <div className="recent__comment-post mb-4" key={item.id}>
                  <div className="recent__comment-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/comments/${item.title}`}>{item.title}</Link>
                      <p className="section__description mb-0">{item.date}</p>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CommentDetails;
