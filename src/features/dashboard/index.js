import { Button } from 'antd'
import React from 'react'
import { DashboardAll, DashboardDistrict, DashboardUser, DashboardCity } from './components'
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";

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

