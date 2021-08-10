import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Select } from 'antd';
import { useForm, Controller } from "react-hook-form";
import React, { useState } from 'react';
const { Option } = Select;

export function Management(props) {

    const { control, handleSubmit } = useForm();

    const { users, deleteUser, filter, setFilter, setIsSearch, provinces,
        districts, wards, lstRoadAxis, loadRoadAxis, loadWard } = props;

    const onDeleteUser = id => {
        deleteUser(id);
    }

    const onSubmit = data => {
        setFilter(data);
        setIsSearch(true);
    }

    const handleProvice = provinceID => {
        setFilter({ ...filter, provinceID: provinceID });
    }

    const handleDistrict = districtID => {
        setFilter({ ...filter, districtID: districtID })
        loadWard(districtID);
        if (filter.provinceID != "-1" && districtID != "-1") {
            loadRoadAxis(filter.provinceID, districtID);
        }
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
                        <label className="control-label">Tỉnh / TP</label>
                        <br />
                        <Controller
                            render={({ field }) => {
                                return (
                                    <Select
                                        {...field} className="select2"
                                        optionFilterProp="children"
                                        showSearch
                                        onSelect={handleProvice}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="-1">---</Option>
                                        {
                                            provinces.map(item => {
                                                return (
                                                    <Option value={item.ProvinceID} key={item.ProvinceID}>{item.ProvinceName}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                )
                            }}
                            control={control}
                            defaultValue={filter.provinceID}
                            name="provinceID"
                        />
                    </Col>
                    <Col span={6}>
                        <label className="control-label">Quận / Huyện</label>
                        <Controller
                            render={({ field }) => {
                                return (
                                    <Select {...field}
                                        className="select2"
                                        optionFilterProp="children"
                                        showSearch
                                        onSelect={handleDistrict}
                                        filterOption={(input, option) =>
                                            option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }>
                                        <Option value="-1">---</Option>
                                        {districts.map(item => {
                                            return (
                                                <Option value={item.DistrictID} key={item.DistrictID} > {item.DistrictName}</Option>
                                            )
                                        })}
                                    </Select>
                                )
                            }}
                            control={control}
                            defaultValue={filter.districtID}
                            name="districtID"
                        />
                    </Col>
                    <Col span={6}>
                        <label className="control-label">Phường / Xã</label>
                        <Controller
                            render={({ field }) => {
                                return (
                                    <Select {...field} className="select2"
                                        optionFilterProp="children"
                                        showSearch
                                        filterOption={(input, option) =>
                                            option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }>
                                        <Option value="-1">---</Option>
                                        {wards.map(item => {
                                            return (
                                                <Option value={item.WardID} key={item.WardID} > {item.WardName}</Option>
                                            )
                                        })}
                                    </Select>
                                )
                            }}
                            control={control}
                            defaultValue={filter.wardID}
                            name="wardID"
                        />
                    </Col>
                </Row >
                <Row gutter={16} className="form-group">
                    <Col span={6}>
                        <label className="control-label">Trục đường</label>  <br />
                        <Controller
                            render={({ field }) => {
                                return (
                                    <Select
                                        {...field} className="select2"
                                        optionFilterProp="children"
                                        showSearch
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="-1">---</Option>
                                        {
                                            lstRoadAxis.map(item => {
                                                return (
                                                    <Option value={item.RoadAxisID} key={item.RoadAxisID}>{item.RoadAxisName}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                )
                            }}
                            control={control}
                            defaultValue={filter.roadAxisID}
                            name="roadAxisID"
                        />
                    </Col>
                    <Col span={18}>
                        <label className="control-label">Thao tác</label>  <br />
                        <Button icon={<SearchOutlined />} type="primary" htmlType='submit'>
                            Tìm
                        </Button>
                    </Col>
                </Row>
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

