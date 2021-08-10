import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/common';
import { Management } from '../components';
import { getProvince, selectHouseForRent } from '../houseForRentSlice';

function MainPage() {

    const dispatch = useDispatch();

    const { users, isLoading } = useSelector(selectHouseForRent);
    const [filter, setFilter] = useState({
        keySearch: '',
        gender: "-1",
        year: "-1"
    });

    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        dispatch(getProvince());
    }, [isSearch]);

    const onDeleteUser = id => {
        alert(id);
    }

    const searchData = [];

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <div>
                        <Management
                            users={searchData}
                            deleteUser={onDeleteUser}
                            filter={filter}
                            setFilter={setFilter}
                            setIsSearch={setIsSearch}
                        />
                    </div>
            }
        </>
    )
}

export default MainPage
