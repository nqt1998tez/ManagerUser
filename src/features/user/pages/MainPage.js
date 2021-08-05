import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/common';
import { Management } from '../components';
import { getAllUser, selectIsLogged, selectUserLoading, selectUsers } from '../userSlice';

function MainPage() {

    const dispatch = useDispatch();

    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectUserLoading);
    const isLogged = useSelector(selectIsLogged);
    //const cities = useSelector(selectCities);



    // useEffect(() => {
    //     unwrapResult(dispatch(getAllUser()));
    //     // unwrapResult(dispatch(getAllCity()));
    // }, []);

    const initialYear = () => {

        const years = [];

        const year = new Date().getFullYear();
        for (let index = 0; index < 50; index++) {
            years.push({ year: year - index });
        }
        return years;
    }

    const onSearchTerm = () => {
        console.log(isLogged);
        console.log(unwrapResult(dispatch(getAllUser())));
        if (isLoading) {
            alert('a');
        }
    }

    const onDeleteUser = id => {
        alert(isLoading);
    }

    return (
        <>
            {/* {
                isLoading ? <Loading /> :
                    <div>
                        <Management
                            users={users}
                            // cities={cities}
                            years={initialYear()}
                            deleteUser={onDeleteUser}
                            onSearchTerm={onSearchTerm}
                        />
                    </div >
            } */}
            <button type="button" onClick={onSearchTerm}>x</button>
        </>
    )
}

export default MainPage
