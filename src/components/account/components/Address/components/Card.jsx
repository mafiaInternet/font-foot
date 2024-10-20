import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAddressById } from '../../../../../state/Address/Action';
import { Col, Modal, Row } from 'antd';
import Input from '../../../../common/Input';

const Card = ({item}) => {
    const dispatch = useDispatch()
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
            decs: data.get('decs'),
            status: data.get('status'),
            // user_id: auth.user.id
        }
    
        // dispatch(create(address))
      }
    return (
        <div className='address--card mb-3'>
            <div className='flex justify-between'>
                <div>
                    <p>
                        <strong className='pr-1 border-r-1 border-solid border-gray-600 '>{item.name}</strong>
                        <span className='pl-1'>{item.mobile}</span>
                    </p>
                    <p>{item.description}</p>
                    <p>{item.province}, {item.district}, {item.ward}</p>
                    
                        {item.status ? (<span className='border-green-600 border-1 border-solid p-1 text-green-600'>Mặc định</span>) : ''}
                    

                </div>
                <div>
                    <p className='text-right'>
                        <span className='text-blue-600 hover:text-blue-500 cursor-pointer' onClick={showModal}>Cập nhật</span>
                        {!item.status ? (
                        <span className='ml-1 text-red-600 hover:text-red-500 cursor-pointer' onClick={() => dispatch(deleteAddressById(item.id))}>Xóa</span>

                        ) : ''}
                    </p>
                        <button className='py-1 px-3 border-1 border-solid border-blue-600 hover:border-blue-500 text-blue-600 hover:text-blue-500'>Thiết lập mặc định</button>
                </div>
            </div>
            <Modal title="Thêm địa chỉ" open={isModalOpen}  onOk={handleOk} onCancel={handleCancel}>
       <form method="POST" onSubmit={submit}>
       <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input id="name" name="name" value={item.name} label="Họ tên"></Input>

        </Col>
        <Col span={12}>
        <Input id="mobile" name="mobile" value={item.mobile} label="Số điện thoại"></Input>
        </Col>
        {/* <p></p> */}
        <Col span={8}>
        <Input id="province" name="province" value={item.province} label="Tỉnh/ Thành phố"></Input>

        </Col>
        <Col span={8}>
        <Input id="district" name="district" value={item.district} label="Quận/ Huyện"></Input>

        </Col>
        <Col span={8}>
        <Input id="ward" name="ward" value={item.ward} label="Phường/ Xã"></Input>

        </Col>
        <Col span={24}>
        <Input id="decs" name="decs" value={item.description} label="Địa chỉ cụ thể"></Input>

        </Col>
        <Col span={8}>
            <input type="checkbox" id="status" name="status"></input>
            <label className="ml-1" htmlFor="status">Cài đặt mặc định</label>
        </Col>
       </Row>
       </form>
      </Modal>
        </div>
    );
}

export default Card;
