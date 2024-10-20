import React from "react";
import Input from "../../common/Input";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

const Information = () => {
  const auth = useSelector(store => store.auth)
  console.log(auth)
  const submit = () => {};
  return (
    <div className="account container my-10">
      <form method="POST" onSubmit={submit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Input id="name" name="name" value={auth && auth.user ? auth.user.name : ''} label="name"></Input>
          </Col>
          <Col span={12}>
            <Input id="email" name="email" value={auth && auth.user ? auth.user.email : ''}  label="email"></Input>
          </Col>
          <Col span={12}>
            <Input id="password" name="password" label="Mật khẩu cũ"></Input>
          </Col>
          <Col span={12}>
            <Input id="new" name="new" label="Mật khẩu mới"></Input>
          </Col>
          <Col span={12}>
            <Input
              id="confirm"
              name="confirm"
              label="Xác nhận mật khẩu"
            ></Input>
          </Col>
          <Col span={24} className="text-center">
          <button className="bg-green-700 hover:bg-green-600 rounded-2 py-1 px-3 text-white" type="submit">Lưu</button>

          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Information;
