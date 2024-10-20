import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-gray-200">
      <div className="flex md:flex-col gap-4 container py-3 justify-between">
        <div>
          <ul>
            <Link className="text-gray-600 hover:text-green-600" to="/">
              <img
                className="w-logo"
                src="https://cqmart.vn/images/thumbs/0009534_Logo CQ Mart_Ngang_2024.png"
              ></img>
            </Link>
            <li className="text-gray-600">Hộ Kinh Doanh CQMart</li>
            <li className="text-gray-600">
              Địa chỉ: 59 Nguyễn Khắc Nhu, P. Cô Giang, Quận 1, TP.HCM
            </li>
            <li className="text-gray-600">Hotline: 0902719885</li>
            <li className="text-gray-600">Mã số thuế: 8602142214</li>
            <li className="text-gray-600">Ngày cấp: 29-12-2020</li>
            <li className="text-gray-600">Nơi cấp: Uỷ ban nhân dân quận 1</li>
            <li className="text-gray-600">Theo dõi chúng tôi</li>
            <li className="flex text-gray-600">
              <SlSocialFacebook color="sky"></SlSocialFacebook>
              <Link className="text-gray-600 hover:text-green-600" className="mx-3">
                <FiTwitter color="blue"></FiTwitter>
              </Link>
              <FaYoutube color="red"></FaYoutube>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h4 className="text-2xl font-semibold text-gray-600">Thông Tin</h4>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Chính Sách Giao Hàng</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Chính Sách Đổi Hàng</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Chính sách bảo mật</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Điều khoản dịch vụ</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Thanh toán</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Giấy Phép Kinh Doanh</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Rượu</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Giới thiệu</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h4 className="text-2xl font-semibold text-gray-600">
              Thương hiệu thuộc CQ Mart
            </h4>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Bánh Trung Thu CQ Mart</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">Quà Tết CQ Mart</Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-green-600" to="">CQFood</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-400 "></hr>
      <div className="text-center py-3 text-gray-600">
        © 2024 CQ Mart Food & Wine. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
