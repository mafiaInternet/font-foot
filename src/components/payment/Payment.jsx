import { Button, Col, Modal, Radio, Row } from "antd";
import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../state/Cart/Action";
import { getAddress } from "../../state/Address/Action";

const Payment = () => {
  const dispatch = useDispatch()
  const {cart, address} = useSelector(store => store)
  const jwt = localStorage.getItem('jwt')

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [data, setData] = useState(null)
  useEffect(() => {
    if(jwt){
      dispatch(getCart())
      dispatch(getAddress())
    }
  }, [jwt])

  useEffect(() => {
    if(address && address.address){
      setData(address.address)
    }
  }, [address.address])
  console.log(data)
  return cart && cart.cartItems &&address && address.address && address.addresses && <div className="payment ">
      <div className="flex md:flex-row flex-col">
        <div className="container md:w-full mx-auto md:w-1/2 my-10 md:ml-28 md:mr-10">
          <div className="float-right">
            <p>Trang chủ {">"} Đặt hàng</p>
            <h2 className="text-2xl font-bold my-5">Thanh toán</h2>
            <div className="my-5 flex items-center">
              <h4>Địa chỉ giao hàng</h4>
              <span className="ml-1 text-blue-700 hover:text-blue-600 cursor-pointer" onClick={showModal}>Chọn địa chỉ</span>
            </div>
            
            <form method="POST">
              <Row gutter={[16, 16]}>
                <Col className="gutter-row" span={12}>
                  <Input name="name" id="name" value={address.address.name} label="Họ tên"></Input>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Input name="mobile" id="phone" value={address.address.mobile} label="Số điện thoại"></Input>
                </Col>

                <Col className="gutter-row" span={8}>
                  <Select label="Tỉnh/ Thành" value={address.address.province}></Select>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Select label="Quận/ Huyện" value={address.address.district}></Select>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Select label="Phường/ Xã" value={address.address.ward}></Select>
                </Col>
                <Col className="gutter-row" span={24}>
                  <Input
                    id="description"
                    name="description"
                    label="Địa chỉ"
                    value={address.address.desc}
                  ></Input>
                </Col>
              </Row>
            </form>
            <div className="flex justify-between mt-2">
              <Link to="/cart">Giỏ hàng</Link>
              <button className="bg-green-700 py-2 px-3 rounded-2 text-white hover:bg-green-900">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
        <div className="w-full w-1/2 bg-gray-100 pl-10 pt-10">
          <div className="mb-3">
            {cart && cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.filter((item) => item.status === 1).map((item) =>
            <div key={item.id}>

            <Card item={item}></Card>
            </div>

            )}
           
          </div>
          <div className="mb-3">
            <b>Phương thức thanh toán</b>
            <div className="flex grow-1">
                <input type="radio" name="radio" id="radio-1"></input>
                <label className="mx-1" htmlFor="radio-1">Thanh toán khi giao hàng</label>
                <input className="mx-1"  type="radio" name="radio" id="radio-2"></input>
                <label htmlFor="radio-2">Thanh toán online</label>
            
            </div>
          </div>
          <div className="mb-3">
            <b>Mã giảm giá</b>
            <div className="border-1 border-solid rounded flex">
              <input
                className="focus:outline-none p-1 rounded-s flex-grow"
                type="text"
                name="voucher"
                id="voucher"
              ></input>
              <button
                className="bg-black text-white py-1 px-2 rounded-e"
                htmlFor="voucher"
              >
                Áp dụng
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="w-1/2">
              <p className="text-base mb-1">Tạm tính:</p>
              <p className="text-base mb-1">Phí giao hàng:</p>
              <p className="text-base mb-1">Giảm giá:</p>
              <p className="text-base mb-1">Tổng tiền:</p>
            </div>
            <div className="w-1/2">
              <p className="text-base text-left mb-1">743.600 ₫</p>
              <p className="text-base text-left mb-1">Liên hệ</p>
              <p className="text-base text-left mb-1">-10.000đ</p>
              <p className="text-base text-left mb-1">743.600 ₫</p>
            </div>
          </div>
        </div>
      </div>
      <Modal title="Danh sách địa chỉ" open={isModalOpen} footer={false} onOk={handleOk} onCancel={handleCancel}>
            {address.addresses.map((item) => (
              <div className="flex items-center justify-between w-full mb-3" key={item.id}>
              <div className="flex">
                <input type="radio" checked={item.id == data.id ? true : false} onChange={() => setData(item)}></input>
                <div className="ml-3">
                  <p>
                    <span>{item.name} | {item.mobile}</span>
                  </p>
                  <p>{item.province}, {item.district}, {item.ward}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
              <span className="text-blue-700 hover:text-blue-600 cursor-pointer">Cập nhật</span>
            </div>
            ))}
      </Modal>
    </div>
    

};

export default Payment;
