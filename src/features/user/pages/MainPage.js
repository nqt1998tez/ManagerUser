import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/common';
import { Management } from '../components';
import { getAllUser, selectUser } from '../userSlice';

function MainPage() {

    const dispatch = useDispatch();

    const { users, isLoading } = useSelector(selectUser);
    const [filter, setFilter] = useState({
        keySearch: '',
        gender: "-1",
        year: "-1"
    });

    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        dispatch(getAllUser());
    }, [isSearch]);

    const onDeleteUser = id => {
        alert(id);
    }

    const searchData = users.filter(item => item.name.includes(filter.keySearch.trim()));

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
                    </div >
            }
        </>
    )
}

export default MainPage
