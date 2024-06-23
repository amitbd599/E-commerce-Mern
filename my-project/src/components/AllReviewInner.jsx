/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"

const AllReviewInner = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Reviews:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Reviews list data" columns={columns} data={data} pagination />

            </div>


        </div>
    )
}

export default AllReviewInner