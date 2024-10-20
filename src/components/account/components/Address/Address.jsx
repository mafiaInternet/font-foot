import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, getAddress } from "../../../../state/Address/Action";
import Card from "./components/Card";
import { Col, Modal, Row } from "antd";
import Input from "../../../common/Input";

const Address = () => {
  const dispatch = useDispatch();
  const {auth, address} = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  console.log(auth)
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

  const submit = (event) =>{
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const address = {
        name: data.get('name'),
        mobile: data.get('mobile'),
        province: data.get('province'),
        district: data.get('district'),
        ward: data.get('ward'),
        description: data.get('decs'),
        status: data.get('status'),
        user_id: auth.user.id
    }
    console.log(address)
    dispatch(create(address))
  }
console.log(address)
  useEffect(() => {
    if (jwt) {
      dispatch(getAddress());
    }
  }, [jwt]);
  return (
    <div className="address ">
      <div className="flex justify-between items-center p-3">
        <h2>Địa chỉ của tôi</h2>
        <button className="bg-green-700 hover:bg-green-600 py-1 px-3 text-base text-white" onClick={showModal}>
          + Thêm địa chỉ mới
        </button>
      </div>
      <hr></hr>
      <div className="p-3">
        {address &&
          address.addresses &&
          address.addresses.length > 0 &&
          address.addresses.map((item) => (
            <div key={item.id}>
              <Card item={item} isModalOpen={isModalOpen} showModel={showModal} handleCancel={handleCancel} handleOk={handleOk}></Card>
            </div>
          ))}
      </div>
      <Modal title="Thêm địa chỉ" open={isModalOpen}  footer={false} onOk={handleOk} onCancel={handleCancel}>
       <form method="POST" onSubmit={submit}>
       <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input id="name" name="name" label="Họ tên"></Input>

        </Col>
        <Col span={12}>
        <Input id="mobile" name="mobile" label="Số điện thoại"></Input>
        </Col>
        {/* <p></p> */}
        <Col span={8}>
        <Input id="province" name="province" label="Tỉnh/ Thành phố"></Input>

        </Col>
        <Col span={8}>
        <Input id="district" name="district" label="Quận/ Huyện"></Input>

        </Col>
        <Col span={8}>
        <Input id="ward" name="ward" label="Phường/ Xã"></Input>

        </Col>
        <Col span={24}>
        <Input id="decs" name="decs" label="Địa chỉ cụ thể"></Input>

        </Col>
        <Col span={8}>
            <input type="checkbox" id="status" name="status"></input>
            <label className="ml-1" htmlFor="status">Cài đặt mặc định</label>
        </Col>
        <Col span={8}>
          <button className="bg-green-700 hover:bg-green-600 px-3 py-1 text-white rounded-2 text-base" type="submit">Thêm</button>
        </Col>
       </Row>
       </form>
      </Modal>
    </div>
  );
};

export default Address;
