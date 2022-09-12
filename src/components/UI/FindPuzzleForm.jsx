import React from "react";
import "../../styles/find-puzzle-form.css";
import { Form, FormGroup } from "reactstrap";

const FindPuzzleForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="拼图品牌" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="拼图规格（500/1000/2000）" required />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="全新">全新</option>
            <option value="二手">二手</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="收货地址" required />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="自提">自提</option>
            <option value="送货上门">送货上门</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="find__puzzle-btn">查找拼图</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindPuzzleForm;
