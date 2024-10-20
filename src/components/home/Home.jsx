import React from 'react';
import Header from './Header';
import Banner from './Banner';
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { Col, Row } from 'antd';
import Product from '../product/Product';


const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <div className='flex justify-center items-center my-10'>
                <div className="flex items-center px-3">
                    <AiOutlineFileProtect size={40} color='green'></AiOutlineFileProtect>
                    <div className="ml-3">
                        <b>Xuất Xứ An Toàn</b>
                        <p className='text-gray-400'>100% hàng hóa xuất xứ rõ ràng</p>
                    </div>
                </div>
                <div className="flex items-center px-3 border-x-2">
                    <FaRecycle size={40} color='green'></FaRecycle>
                    <div className="ml-3">
                        <b>7 Ngày Đổi Trả</b>
                        <p className='text-gray-400'>Nếu hàng bị lỗi sản xuất</p>
                    </div>
                </div>
                <div className="flex items-center px-3 border-r-2">
                   <MdOutlineLocalShipping size={40} color='green'></MdOutlineLocalShipping>
                   <div className="ml-3" >
                    <b>Giao Hàng Toàn Quốc</b>
                    <p className='text-gray-400'>Vận chuyển nhanh chóng</p>
                   </div>
                </div>
                <div className="flex items-center px-3">
                    <MdOutlineSupportAgent size={40} color='green'></MdOutlineSupportAgent>
                    <div className="ml-3">
                        <b>Hỗ Trợ 24/7</b>
                        <p className='text-gray-400'>Hỗ trợ tận tình</p>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
                <Row>
                    <Col span={4}>
                        <img src='https://www.cqmart.vn/images/thumbs/0005443_banh-keo_150.png'></img>
                        <p>BÁNH - KẸO</p>
                    </Col>
                    <Col span={4}>
                        <img src='https://www.cqmart.vn/images/thumbs/0005442_tra-ca-phe_150.png'></img>
                        <p>TRÀ - CAFE</p>
                    </Col>
                    <Col span={4}>
                        <img src='https://www.cqmart.vn/images/thumbs/0005435_chocolate_150.png'></img>
                        <p>CHOCOLATE</p>
                    </Col>
                    <Col span={4}>
                        <img src='https://www.cqmart.vn/images/thumbs/0005441_kho-an-vat_150.png'></img>
                        <p>KHÔ - ĂN VẶT</p>
                    </Col>
                    <Col span={4}>
                        <img src='https://www.cqmart.vn/images/thumbs/0005439_thuc-pham-kho_150.png'></img>
                        <p>THỰC PHẨM KHÔ</p>
                    </Col>
                    <Col span={4}>
                        <img src='https://www.cqmart.vn/images/thumbs/0005433_do-hop_150.png'></img>
                        <p>ĐỒ HỘP</p>
                    </Col>
                </Row>
            </div>
            <Product></Product>
        </div>
    );
}

export default Home;
