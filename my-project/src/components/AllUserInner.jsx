/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"
import UserStore from "../store/UserStore";
import { useEffect } from "react";

const AllUserInner = () => {
    let { UserAllRequest, AllUser } = UserStore()

    useEffect(() => {
        (async () => {
            await UserAllRequest()
        })()
    }, [])

    console.log(AllUser);
    const columns = [
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Name',
            selector: row => row.profile?.[0]?.cus_name,
        },
        {
            name: 'Address',
            selector: row => row.profile?.[0]?.cus_add,
        },
        {
            name: 'City',
            selector: row => row.profile?.[0]?.cus_city,
        },
        {
            name: 'Phone',
            selector: row => row.profile?.[0]?.cus_phone,
        },
        {
            name: 'Country',
            selector: row => row.profile?.[0]?.cus_country,
        },
    ];


    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Users:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Users list data" columns={columns} data={AllUser} pagination />

            </div>


        </div>
    )
}

export default AllUserInner