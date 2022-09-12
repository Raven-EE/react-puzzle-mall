import React from "react";
import { Col } from "reactstrap";
import "../../styles/comment-item.css";
import { Link } from "react-router-dom";

const CommentItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="12" className="mb-5">
      <div className="comment__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="comment__info p-3">
          <Link to={`/comments/${title}`} className="comment__title">
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/comments/${title}`} className="read__more">
            查看全文
          </Link>

          <div className="comment__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="comment__author">
              <i class="ri-user-line"></i> {author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-calendar-line"></i> {date}
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CommentItem;
