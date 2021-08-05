import { SearchOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import React from 'react';
import { DashboardAll, DashboardCity, DashboardDistrict, DashboardUser } from './components';

export default function DashboardFeature() {

    return (
        <div>

            <Button type="primary" icon={<SearchOutlined />}> Tìm</Button>
            <DashboardAll />
            <DashboardUser />
            <DashboardCity />
            <DashboardDistrict />
        </div>
    )
}

