
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Select } from 'antd';
import React from 'react';

const { Option } = Select;

export function Management(props) {

    const { years, users } = props;

    const onDeleteUser = id => {
        alert(id);
    }
    return (
        <>
            <Row gutter={16}>
                <Col span={6}>
                    <label className="control-label">Từ khóa</label>
                    <Input placeholder="Tìm họ tên" />
                </Col>

                <Col span={6}>
                    <label className="control-label">Giới tính</label>
                    <br />
                    <Select className="select2" defaultValue="-1">
                        <Option value="-1">---</Option>
                        <Option value="Nam">Nam</Option>
                        <Option value="Nữ">Nữ</Option>
                    </Select>
                </Col>

                <Col span={6}>
                    <label className="control-label">Năm sinh</label>
                    <Select className="select2" defaultValue="-1">
                        <Option value="-1">---</Option>
                        {years.map(item => {
                            return (
                                <Option value={item.year} key={item.year}> {item.year}</Option>
                            )
                        })}
                    </Select>
                </Col>
                <Col span={6}>
                    <label className="select2"></label>
                    <Button type="primary" >
                        <SearchOutlined />
                        Tìm
                    </Button>
                </Col>
            </Row >
            <Row className="mt-1">
                <Col span={24}>
                    <table className="table table-hover">
                        <thead className="bg-default">
                            <tr>
                                <th>STT</th>
                                <th>Họ tên</th>
                                <th>Giới tính</th>
                                <th>Tuổi</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, key) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{key + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.age}</td>
                                        <td>
                                            <Button size="small" type="primary" danger icon={<DeleteOutlined />} onClick={() => onDeleteUser(item.id)}>

                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    )
}

