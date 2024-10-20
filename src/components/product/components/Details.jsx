import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../state/Product/Action";
import { CiHeart } from "react-icons/ci";
import { postItemToCart } from "../../../state/Cart/Action";
const Details = () => {
  const product = useSelector(store => store.product)
  const dispatch = useDispatch()
  const param = useParams()
  const [state, setState] = useState(0);
  useEffect(() => {
 
    dispatch(getProductById(param.id))
  }, [param.id])

  return (product.product &&
    <div className="product--details ">
      <div className="container">
        <div>Sản phẩm</div>
        <div>
          <h3 className="text-2xl font-bold">
          {product.product.title}

          </h3>
          <hr className="my-2"></hr>
          <Row gutter={16}>
            <Col span={24} md={10}>
              <img
                className="img-fluid"
                src="https://www.cqmart.vn/images/thumbs/0008801_ca-phe-hoa-tan-3in1-tam-chau-hop-170g.png"
              ></img>
            </Col>
            <Col span={23} sm={18} md={14} className="flex items-center">
             <div >
             <div className="text-xl mb-3 ">
                <span>{product.product.discountedPrice}</span>
                <span className="mx-3 line-through text-gray-500">{product.product.price}</span>
                <span className="px-1 rounded-2 bg-red-500 text-white">{product.product.discountedPersent}%</span>
              </div>
              <div className="flex justify-between">
                <div className="flex border-1 rounded-2 border-solid mr-2 bg-gray-100">
                  <button
                    className="w-1/3 text-center text-base leading-none"
                    onClick={() => setState(state + 1)}
                  >
                    <span>
                      <FaMinus className="inline-block"></FaMinus>
                    </span>
                  </button>
                  <input
                    className="w-1/3 bg-transparent focus:outline-none text-center"
                    value={state}
                    type="text"
                  ></input>
                  <button
                    className="w-1/3 text-center text-base leading-none"
                    onClick={() => setState(state + 1)}
                  >
                    <span>
                      <FaPlus className="inline-block"></FaPlus>
                    </span>
                  </button>
                </div>
                <button 
                className="flex-grow bg-green-600 hover:bg-green-900 text-white text-base rounded-2 py-1 px-3 ml-2"
                onClick={() => dispatch(postItemToCart({product_id: product.product.id}))}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
              <button className="w-full px-3 py-1 my-3 bg-red-600 hover:bg-red-700 text-white text-base rounded-2">
                Mua Ngay
              </button>
              <span className="flex items-center text-base hover:text-green-600 cursor-pointer">
                <CiHeart className="mr-2" size={25}></CiHeart> Thêm vào yêu thích
              </span>
             </div>
            </Col>
          </Row>
        </div>
        <div className="my-10">
          <p className="text-center mb-3">
            <b className="pb-1 px-3 border-b-solid border-b-2 border-b-orange-500">
              Thông tin sản phẩm
            </b>
          </p>
          <div>
            {product.product.description && product.product.description.split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
      
          </div>
        </div>
        <hr></hr>
        <div className="my-3">
            <p>CQ Mart Food & Wine</p>
            <p>Điện thoại: 0902 719 885</p>
            <p>Facebook: fb.com/cqmartfoodwine</p>
            <p>Địa chỉ: 59 Nguyễn Khắc Nhu, P.Cô Giang, Quận 1, TP.HCM</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
