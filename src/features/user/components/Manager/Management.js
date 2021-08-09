import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Select } from 'antd';
import { useForm, Controller } from "react-hook-form";
import React, { useState } from 'react';
const { Option } = Select;

export function Management(props) {

    const { control, handleSubmit } = useForm();

    const { users, deleteUser, filter, setFilter, setIsSearch } = props;

    const initialYear = () => {
        const years = [];
        const year = new Date().getFullYear();
        for (let index = 1980; index <= year; index++) {
            years.push({ year: index });
        }
        years.sort((elm1, elm2) => { return elm2.year - elm1.year });
        return years;

    }

    const onDeleteUser = id => {
        deleteUser(id);
    }

    const onSubmit = data => {
        setFilter(data);
        setIsSearch(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={16} className="form-group">
                    <Col span={6}>
                        <label className="control-label">Từ khóa</label>
                        <Controller
                            render={({ field }) => <Input {...field} placeholder="Tìm nhân viên" />}
                            control={control}
                            defaultValue={filter.keySearch}
                            name="keySearch"
                        />
                    </Col>

                    <Col span={6}>
                        <label className="control-label">Giới tính</label>
                        <br />
                        <Controller
                            render={({ field }) => {
                                return (
                                    <Select {...field} className="select2">
                                        <Option value="-1">---</Option>
                                        <Option value="0">Nam</Option>
                                        <Option value="1">Nữ</Option>
                                    </Select>
                                )
                            }}
                            control={control}
                            defaultValue={filter.gender}
                            name="gender"
                        />
                    </Col>
                    <Col span={6}>
                        <label className="control-label">Năm sinh</label>
                        <Controller
                            render={({ field }) => {
                                return (
                                    <Select {...field} className="select2" showSearch >
                                        <Option value="-1">---</Option>
                                        {initialYear().map(item => {
                                            return (
                                                <Option value={item.year} key={item.year}> {item.year}</Option>
                                            )
                                        })}
                                    </Select>
                                )
                            }}
                            control={control}
                            defaultValue={filter.year}
                            name="year"
                        />
                    </Col>
                    <Col span={6}>
                        <label className="select2">&nbsp;</label> <br />
                        <Button icon={<SearchOutlined />} type="primary" htmlType="submit">
                            Tìm
                        </Button>
                    </Col>
                </Row >
            </form>

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

