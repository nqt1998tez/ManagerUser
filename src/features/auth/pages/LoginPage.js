import { LoadingOutlined, LoginOutlined } from "@ant-design/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Card } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { onLogin, selectAuth } from '../authSlice';


export default function LoginPage() {

    const auth = useSelector(selectAuth);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const response = unwrapResult(await dispatch(onLogin()));

            console.log(auth);
            if (response != null && response.length > 0) {
                history.push("/admin");
            }
        } catch (error) {

        }

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ececec', height: '100vh' }}>
            <Card title="System Manager" style={{ width: '300px', textAlign: 'center' }}>
                <Button type='primary' block onClick={handleLogin}>
                    {auth.isLoading ? <LoadingOutlined /> : <LoginOutlined />}
                    Fake Login
                </Button>
            </Card>
        </div>

    )
}

