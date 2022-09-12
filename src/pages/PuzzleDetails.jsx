import React, { useEffect } from "react";

import puzzleData from "../assets/data/puzzleData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const PuzzleDetails = () => {
  const { slug } = useParams();

  const singlePuzzleItem = puzzleData.find((item) => item.puzzleName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singlePuzzleItem]);

  return (
    <Helmet title={singlePuzzleItem.puzzleName}>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <img src={singlePuzzleItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="9">
              <div className="puzzle__info">
                <h2 className="section__title detail__title">{singlePuzzleItem.puzzleName}</h2>
            
                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="puzzle__price fw-bold fs-4">
                    ￥{singlePuzzleItem.price}.00
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singlePuzzleItem.rating} 人评价)
                  </span>
                </div>

                <p className="section__description">
                  {singlePuzzleItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-windy-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singlePuzzleItem.brand}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-flag-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singlePuzzleItem.country}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singlePuzzleItem.state}
                  </span>
                </div>

              </div>
            </Col>

            <Col lg="12" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">立即选购</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="12" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">支付方式</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PuzzleDetails;
