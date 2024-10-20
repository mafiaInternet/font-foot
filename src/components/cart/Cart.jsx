import React, { useEffect, useState } from "react";
import Summary from "./components/Summary";
import Card from "./components/Card";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../state/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getCart());
    }
  }, [dispatch, jwt]);

  return (
    // <div className='cart sm:w-sm xl:w-xl my-10 mx-auto'>
    <div className="container my-10">
      <p>Trang chủ {">"} Giỏ hàng</p>
      <h2 className="text-2xl font-bold my-5">Giỏ hàng</h2>
      <Row gutter={[16, 16]}>
        <Col span={24} xl={18}>
          <Row>
            {cart && cart.cartItems &&
                cart.cartItems.length > 0 &&
                cart.cartItems.map((item) => (
                <Col span={24} key={item.id}>
                  <Card item={item}></Card>
                </Col>
              ))}
          </Row>
        </Col>

        <Col span={24} xl={6}>
          <Summary></Summary>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
