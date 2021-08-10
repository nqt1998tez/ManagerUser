import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/common';
import { Management } from '../components';
import { getByID, getDistrict, getProvince, getRoadAxis, getWard, selectHouseForRent } from '../houseForRentSlice';

function MainPage() {

    const dispatch = useDispatch();

    const { users, isLoading, provinces, districts, wards, lstRoadAxis } = useSelector(selectHouseForRent);
    const [filter, setFilter] = useState({
        keySearch: '',
        provinceID: "-1",
        districtID: "-1",
        wardID: "-1",
        status: "-1",
        roadAxisID: "-1"
    });

    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        dispatch(getProvince());
        dispatch(getDistrict({ provinceid: filter.provinceID }));
        dispatch(getWard({ districtid: filter.districtID }));
    }, []);

    const loadRoadAxis = (provinceID, districtID) => {
        console.log(provinceID, districtID);
        dispatch(getRoadAxis({
            provinceID: provinceID,
            districid: districtID
        }));
    }

    const loadWard = districtID => {
        dispatch(getWard({ districtid: districtID }));
    }



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
                            provinces={provinces}
                            districts={districts}
                            wards={wards}
                            lstRoadAxis={lstRoadAxis}
                            loadRoadAxis={loadRoadAxis}
                            loadWard={loadWard}
                        />
                    </div>
            }
        </>
    )
}

export default MainPage
