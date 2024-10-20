import { Col, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItemToCart, putItemOfCart } from "../../../state/Cart/Action";
const Card = ({item}) => {
  const dispatch = useDispatch()

  return (
    <div className="cart--card ">
      <Row className="items-center">
        <Col span={1}>
          <input type="checkbox" checked={item.status} onChange={() => dispatch(putItemOfCart({id: item.id,quantity: item.quantity, status: !item.status}))}></input>
        </Col>
        <Col span={4}>
          <img src="https://www.cqmart.vn/images/thumbs/0006174_quyt-uc-2ph-khay-5-trai_256.png"></img>
        </Col>
        <Col span={11}>
          <div className="flex-grow ml-5">
            <Link className="text-base font-bold" to="#">{item.product.title}</Link>
            <p className="text-base my-2">
              <span className="line-through">81.000đ</span>
              <span className="ml-1 text-red-600">81.000đ</span>
            </p>
            <span className="inline-flex text-base items-center text-red-600 cursor-pointer" onClick={() => dispatch(deleteItemToCart(item.id))}>
              <RiDeleteBin5Line className="mr-2"></RiDeleteBin5Line> Xóa
            </span>
          </div>
        </Col>
        <Col span={3}>
          <div className="flex  border-1 rounded-2 border-solid">
          <button
              className="w-1/3 border-r-1 text-center text-base leading-none"
              onClick={() => dispatch(putItemOfCart({id: item.id,quantity: item.quantity - 1, status: item.status}))}
            >
              <span>
                <FaMinus className="inline-block"></FaMinus>
              </span>
            </button>
            <input
              className="w-1/3 focus:outline-none text-center"
              value={item.quantity}
              // onChange={(e) => setState(e.target.value)}
              type="text"
            ></input>
            <button
              className="w-1/3 border-l-1 text-center text-base leading-none"
              onClick={() => dispatch(putItemOfCart({id: item.id,quantity: item.quantity + 1, status: item.status}))}
            >
              <span>
                <FaPlus className="inline-block"></FaPlus>
              </span>
            </button>
          </div>
        </Col>
        <Col span={5}>
          <p className="text-center text-base">81.000đ</p>
        </Col>
      </Row>
      <hr></hr>
    </div>
  );
};

export default Card;
