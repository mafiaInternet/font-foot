import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, user } from "../../state/Auth/Action";

const policies = [
  {
    key: "1",
    label: <Link href="#">Chính Sách Giao Hàng</Link>,
  },
  {
    key: "2",
    label: <Link href="#">Chính Sách Đổi Hàng</Link>,
  },
  {
    key: "3",
    label: <Link href="#">Chính Sách Bảo Mật</Link>,
  },
];

const introduces = [
  {
    key: "1",
    label: <Link href="#">Sứ Mệnh</Link>,
  },
  {
    key: "2",
    label: <Link href="#">Tầm Nhìn</Link>,
  },
];

const Header = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái loading
  const [error, setError] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  useEffect(() => {
    if(jwt){
      dispatch(user(jwt));
    }
  }, [ jwt]);

  console.log(auth);
  useEffect(() => {
    fetch("http://localhost:8000/api/categories") // URL API giả định
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Chuyển đổi phản hồi thành JSON
      })
      .then((data) => {
        setCategories(data); // Lưu dữ liệu sản phẩm vào state
        setLoading(false); // Tắt trạng thái loading
      })
      .catch((error) => {
        setError(error); // Lưu lỗi vào state nếu có lỗi xảy ra
        setLoading(false); // Tắt trạng thái loading
      });
  }, []);

  return (
    <div className="header fixed top-0 left-0 bg-white w-full z-50">
      <div className="py-3 container ">
        <Row className="items-center">
          <Col span={0} md={6}>
            <div className="hidden md:block">
            <Link to="/">

              <img
                className="w-logo"
                src="https://cqmart.vn/images/thumbs/0009534_Logo CQ Mart_Ngang_2024.png"
              ></img>
            </Link>
            </div>
          </Col>
          <Col span={19} md={13} className="ml-auto">
            <div className="flex border-solid border rounded-sm border-gray">
              <input
                className="flex-grow w-auto text-lg p-2 outline-0 rounded-s-sm"
                type="text"
                placeholder="Tìm kiếm"
              ></input>
              <button className="flex p-2 text-lg items-center bg-green-600 text-white rounded-e-sm">
                <CiSearch />
                <span>Tìm kiếm</span>
              </button>
            </div>
          </Col>
          <Col span={1}>
            <div className="flex justify-center">
              <CiHeart className="text-32px" />
              <Link to="/cart" className="hover:text-green-600">
                <CiShoppingCart className="text-32px" />
              </Link>
            </div>
          </Col>
          <Col span={3}>
          
              {!jwt || auth.user == null ? (
                <div className="flex justify-left items-center group">
                  <CiUser className="text-32px "></CiUser>
                  <p className="hover:text-green-900">
                    <Link to="/login">Đăng nhập</Link>
                  </p>
                  <p className="hover:text-green-900">
                    <Link to="/register">Đăng ký</Link>
                  </p>
                </div>
              ) : (
                <div className="flex  justify-left items-center group">
                  <CiUser className="text-32px "></CiUser>
                  <p>{auth.user.name}</p>
                  <ul className="absolute w-full text-center border-1 border-solid border-gray-200 z-10 top-full right-4/5 bg-white hidden group-hover:block">
                    <li className="p-2">
                      <Link to="/account">Tài khoản</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/order">Đơn hàng</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/" onClick={() => dispatch(logout())}>
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
           
          </Col>
        </Row>
      </div>
      <hr></hr>
      <div className="py-3 container">
        <Row>
          <Col span={5}>
            <div className="group relative">
              <div className="flex items-center ">
                <FaBars size={27}></FaBars>
                <span className="text-lg ml-2">Danh mục</span>
              </div>
              <div className="absolute hidden top-full bg-white px-3 pt-4 pb-2 border-solid border-1 border-gray-200 z-10 group-hover:block ">
                <ul>
                  {categories &&
                    categories.map((category) => (
                      <li key={category.id}>
                        <Link to={category.nameId}>{category.name}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col span={13}>
            <ul className="flex justify-center">
              <li className="px-3.5">
                <Link to="/" className="text-lg">
                  Trang Chủ
                </Link>
              </li>
              <li className="px-3.5">
                <Dropdown menu={{ items: policies }}>
                  <a className="text-lg" onClick={(e) => e.preventDefault()}>
                    <Space>
                      Chính sách
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li className="px-3.5">
                <Link to="#" className="text-lg">
                  Thanh toán
                </Link>
              </li>
              <li className="px-3.5">
                <Dropdown menu={{ items: introduces }}>
                  <a className="text-lg" onClick={(e) => e.preventDefault()}>
                    <Space>
                      Giới thiệu
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li className="px-3.5">
                <Link to="#" className="text-lg">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </Col>

          <Col span={6}>
            <div className="text-lg text-right">Liên hệ: 0328310272</div>
          </Col>
          <Col span={24}></Col>
        </Row>
      </div>
      <hr></hr>
    </div>
    // location.pathname != '/payment' &&
  );
};

export default Header;
