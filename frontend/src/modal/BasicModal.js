import React from 'react'
import { Button, Modal } from "antd";
import { useState } from 'react';
import {
    Col, Row,
    Input,
} from 'antd';
const BasicModal = ({ isModalOpen, setIsModalOpen }) => {
    const [showinput, setshowinput] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false)
    };

    const handleCancel = () => {
        setshowinput(true);
    };

    return (
        <>
            <Modal
                open={isModalOpen}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        edit
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={handleOk}
                    >
                        delete
                    </Button>,
                    <Button
                        onClick={handleOk}
                    >
                        Close
                    </Button>
                ]}
            >
                {showinput && <>
                    <Row>
                        <Col>
                            <div className="site-input-group-wrapper">
                                <Input.Group compact>
                                    <Input
                                        style={{
                                            width: '100%',
                                        }}
                                        defaultValue="sleep"
                                    />
                                </Input.Group>
                            </div>
                        </Col>
                        <Col>
                            <Button type="primary">Submit</Button>
                        </Col>
                    </Row>
                </>}
            </Modal>
        </>
    )
}

export default BasicModal