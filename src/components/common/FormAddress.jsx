import { Row } from 'antd';
import React from 'react';
import Input from './Input';

const FormAddress = ({id, name, value}) => {
    return (
        <div className='form--address'>
            <form method='POST' onSubmit={submit}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Input id="name" name="name" label="Họ tên"></Input>
                    </Col>
                </Row>
            </form>
        </div>
    );
}

export default FormAddress;
