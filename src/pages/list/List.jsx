import './list.scss';

import { DataGrid } from '@mui/x-data-grid';
import { useMovieData } from '@mui/x-data-grid-generator';
import { useEffect, useState } from 'react';
import { GetAllUser } from '../../services';

function List() {
    let [allUser, setAllUsers] = useState();
    let [rows, setRows] = useState([]);
    useEffect(() => {
        async function fetchApi() {
            let res = await GetAllUser();
            setAllUsers(res);
        }

        fetchApi();
    }, []);

    const data = useMovieData();

    console.log(allUser);
    useEffect(() => {
        if (allUser) {
            let listUser = [];
            allUser?.forEach((item) => {
                let obj = {};

                obj.id = item.id;
                obj.firstName = item.firstName;
                obj.lastName = item.lastName;
                obj.email = item.email;
                obj.phone = 0;

                listUser.push(obj);
            });
            setRows(listUser);
        }
    }, [allUser]);

    // const rows = [
    //     {
    //         id: 1,
    //         firstName: 'title',
    //         lastName: 'summary',
    //         email: 'email@gmail.com',
    //         phone: 0,
    //     },
    // ];
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'firstName',
            headerName: 'first name',
            width: 230,
        },
        {
            field: 'lastName',
            headerName: 'last name',
            width: 250,
        },
        {
            field: 'email',
            headerName: 'email',
            width: 250,
        },
        {
            field: 'phone',
            headerName: 'phone',
            width: 250,
        },
        // {
        //     field: 'is_parent',
        //     headerName: 'Parent',
        //     width: 100,
        //     renderCell: (params) => {
        //         return (
        //             <>
        //                 <div className="status">
        //                     {params.row.is_parent === '1' ? (
        //                         <div className="active">Parent</div>
        //                     ) : (
        //                         <div className="disable">No</div>
        //                         // {params.row.parent_id === params.row.id}
        //                     )}
        //                 </div>
        //             </>
        //         );
        //     },
        // },
    ];
    return (
        <div className="list">
            <DataGrid
                className="customTable"
                {...data}
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
            />
        </div>
    );
}

export default List;
