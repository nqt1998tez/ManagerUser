import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/common';
import { Management } from '../components';
import { getAllCity, getAllUser, selectCities, selectUserLoading, selectUsers } from '../userSlice';

function MainPage() {

    const dispatch = useDispatch();

    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectUserLoading);
    const cities = useSelector(selectCities);

    useEffect(() => {
        unwrapResult(dispatch(getAllUser()));
        unwrapResult(dispatch(getAllCity()));
    }, []);

    const initialYear = () => {

        const years = [];

        const year = new Date().getFullYear();
        for (let index = 0; index < 50; index++) {
            years.push({ year: year - index });
        }
        return years;
    }

    const onDeleteUser = id => {
        alert(id);
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <div>
                        <Management
                            users={users}
                            cities={cities}
                            years={initialYear()}
                            deleteUser={onDeleteUser} />
                    </div >
            }
        </>
    )
}

export default MainPage
