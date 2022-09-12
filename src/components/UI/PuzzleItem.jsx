import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/puzzle-item.css";

const PuzzleItem = (props) => {
  const { imgUrl, brand, puzzleName, country, state, price } = props.item;

  return (
    <Col lg="4" md="6" sm="12" className="mb-5">
      <div className="puzzle__item">
        <div className="puzzle__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="puzzle__item-content mt-4">
          <h4 className="section__title text-center">{puzzleName}</h4>
          <h6 className="puzzle__price text-center mt-">
            ￥{price}.00
          </h6>

          <div className="puzzle__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-windy-line"></i> {brand}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-flag-line"></i> {country}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {state}
            </span>
          </div>

          <button className=" w-50 puzzle__item-btn puzzle__btn-purchase">
            <Link to={`/puzzles/${puzzleName}`}>立即购买</Link>
          </button>

          <button className=" w-50 puzzle__item-btn puzzle__btn-details">
            <Link to={`/puzzles/${puzzleName}`}>查看详情</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default PuzzleItem;
