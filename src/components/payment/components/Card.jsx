import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const price = item.product.discountedPersent > 0 ? Math.round(item.product.price * item.product.discountedPersent / 100) : item.price;
    return (
        <div className='payment--card mb-3' key={item.id}>
            <Row className='items-center' gutter={[16, 16]}>
                <Col span={5} lg={4} xl={3}>
                <Link to="#" className="w-20 h-20 block bg-cover rounded-3 border-solid border-black border-1" 
                style={{ backgroundImage: `url('https://www.cqmart.vn/images/thumbs/0006174_quyt-uc-2ph-khay-5-trai_256.png')` }}>
                </Link>
                
                </Col>
                <Col span={13} lg={14} xl={15}>
                <div>
                    <b>{item.product.title}</b>
                    <p>Số lượng: x{item.quantity}</p>
                    <p>Giá: {price}đ</p>

                </div>
                </Col>
                <Col span={6}>{price * item.quantity}đ</Col>
            </Row>
        </div>
    );
}

export default Card;
