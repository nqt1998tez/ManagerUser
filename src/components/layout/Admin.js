import {
    AppstoreOutlined, AreaChartOutlined, BarChartOutlined,
    CloudOutlined, TeamOutlined, UploadOutlined, UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import Dashboard from '../../features/dashboard';
import HouseForRent from '../../features/houseForRent';
import PlanningRoad from '../../features/planningRoad';
import RoadAxis from '../../features/roadAxis';
import StorePoint from '../../features/storePoint';
import StorePointRequest from '../../features/storePointRequest';
import TargetGround from '../../features/targetGround';
import UserGround from '../../features/userGround';
import { HeaderAnt, NotFound, Utilities } from '../common';


const { Content, Footer, Sider } = Layout;

export function AdminLayout() {

    const location = useLocation();

    return (
        <Layout>
            <Sider
                width="200"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo"></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[Utilities.selectedKeys(location.pathname)]}>
                    <Menu.Item key="1" icon={<AreaChartOutlined />}>
                        <Link to="/thong-ke" style={{ textDecoration: 'none' }}>Thống kê</Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<UploadOutlined />} >
                        <Link to="/thong-ke/mat-bang-co-hoi" style={{ textDecoration: 'none' }}>Mặt bằng cơ hội</Link>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to="/truc-duong" style={{ textDecoration: 'none' }}>Trục đường</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        <Link to="/doan-quy-hoach" style={{ textDecoration: 'none' }}>Đoạn quy hoạch</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                        <Link to="/truc-duong" style={{ textDecoration: 'none' }}>Mặt bằng mục tiêu</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                        <Link to="/diem-mat-bang" style={{ textDecoration: 'none' }}>Điểm mặt bằng</Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                        <Link to="/yeu-cau-diem-mat-bang" style={{ textDecoration: 'none' }}>Yêu cầu điểm mặt bằng</Link>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<UserOutlined />}>
                        <Link to="/co-cau-nhan-su" style={{ textDecoration: 'none' }}>Cơ cấu nhân sự</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <HeaderAnt />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        <Switch>
                            <Route path="/thong-ke">
                                <Dashboard />
                            </Route>

                            <Route path="/thong-ke/mat-bang-co-hoi" component={<HouseForRent />}>
                            </Route>

                            <Route path="/thong-ke/doan-quy-hoach" component={<PlanningRoad />}>

                            </Route>

                            <Route path="/mat-bang-muc-tieu">
                                <TargetGround />
                            </Route>

                            <Route path="/truc-duong">
                                <RoadAxis />
                            </Route>

                            <Route path="/diem-mat-bang">
                                <StorePoint />
                            </Route>

                            <Route path="/yeu-cau-diem-mat-bang">
                                <StorePointRequest />
                            </Route>

                            <Route path="/co-cau-nhan-su">
                                <UserGround />
                            </Route>

                            <Route path="">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

