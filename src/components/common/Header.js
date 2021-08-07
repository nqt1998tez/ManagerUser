import { LogoutOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { onLogout } from '../../features/auth/authSlice';

const { Header } = Layout;
export function HeaderAnt() {

    const history = useHistory();
    const dispatch = useDispatch();
    const onClickLogOut = () => {
        debugger;
        dispatch(onLogout());
        localStorage.clear();
        history.push("/login");

    }
    return (
        <Header className="site-layout-background" style={{ backgroundColor: "#003a8c" }}>
            <Row justify="space-between">
                <Col span="4">
                    Col-4
                </Col>
                <Col span="4">
                    Col-4
                </Col>
                <Col span="4">
                    Col-4
                </Col>
                <Col span="4">
                    Col-4
                </Col>
                <Col span="4">
                    <Button icon={<TeamOutlined />} type="primary">
                        Notify
                    </Button>
                </Col>
                <Col span="4">
                    <Button icon={<LogoutOutlined />} type="primary" danger onClick={onClickLogOut}>
                        Logout
                    </Button>
                </Col>
            </Row>
        </Header>
    )
}
