import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import PuzzleItem from "../components/UI/PuzzleItem";
import puzzleData from "../assets/data/puzzleData";

const PuzzleListing = () => {
  return (
    <Helmet title="Puzzles">
      <CommonSection title="拼图选购" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> 价格排序
                </span>

                <select>
                  <option value="low">低到高</option>
                  <option value="high">高到低</option>
                </select>
              </div>
            </Col>

            {puzzleData.map((item) => (
              <PuzzleItem item={item} key={item.id} />
            ))}
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PuzzleListing;
