import React from 'react'
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;
export function HeaderAnt() {
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
                    Col-4
                </Col>
                <Col span="4">
                    Col-4
                </Col>
            </Row>
        </Header>
    )
}
