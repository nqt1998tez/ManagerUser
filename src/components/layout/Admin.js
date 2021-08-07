import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined, UploadOutlined, UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import DashboardFeature from '../../features/dashboard';
import UserFeature from '../../features/user';
import { HeaderAnt, Utilities } from '../common';


const { Content, Footer, Sider } = Layout;

export function AdminLayout() {

    const location = useLocation();

    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo"></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[Utilities.selectedKeys(location.pathname)]}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/admin/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/admin/users" style={{ textDecoration: 'none' }}>User</Link>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                        nav 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                        nav 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                        nav 7
                    </Menu.Item>
                    <Menu.Item key="8" icon={<ShopOutlined />}>
                        nav 8
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <HeaderAnt />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24 }}>
                        <Switch>
                            <Redirect exact from="/admin" to="/admin/dashboard" />
                            <Route path="/admin/dashboard">
                                <DashboardFeature />
                            </Route>

                            <Route path="/admin/users">
                                <UserFeature />
                            </Route>

                            <Route>
                                <Redirect to=""/>
                            </Route>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

