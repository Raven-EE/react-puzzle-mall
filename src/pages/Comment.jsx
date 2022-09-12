import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CommentList from "../components/UI/CommentList";
import commentData from "../assets/data/commentData";

const Comment = () => {
  return (
    <Helmet title="Comments">
      <CommonSection title="客户评价" />
      <section>
        <Container>
          <Row>
            {commentData.slice(0, 6).map((item) => (
              <CommentList item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Comment;
