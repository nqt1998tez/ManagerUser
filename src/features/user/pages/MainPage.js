import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/common';
import { Management } from '../components';
import { getAllUser, selectUser } from '../userSlice';
import { message } from 'antd';

function MainPage() {

    const dispatch = useDispatch();

    const { users, isLoading } = useSelector(selectUser);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log(unwrapResult(await dispatch(getAllUser())));
            } catch (error) {
                message.error({
                    content: "Load dữ liệu không thành công",
                    duration: 1
                });
            }
        }
        fetchUser();
    }, []);

    const initialYear = () => {

        const years = [];

        const year = new Date().getFullYear();
        for (let index = 0; index < 50; index++) {
            years.push({ year: year - index });
        }
        return years;
    }

    // const onSearchTerm = () => {
    //     console.log(isLogged);
    //     console.log(unwrapResult(dispatch(getAllUser())));
    //     if (isLoading) {
    //         alert('a');
    //     }
    // }

    const onDeleteUser = id => {
        alert(isLoading);
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <div>
                        <Management
                            users={users}
                            years={initialYear()}
                            deleteUser={onDeleteUser}
                        />
                    </div >
            }
        </>
    )
}

export default MainPage
