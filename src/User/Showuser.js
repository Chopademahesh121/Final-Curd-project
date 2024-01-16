import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
const ShowUser = () => {


    const [employee, setemployee] = useState([]);


    async function fetchemployeeData() {
        const result = await axios.get("http://localhost:8080/employee");
        console.log(result.data);
        setemployee(result.data)
    }
    useEffect(() => {
        fetchemployeeData();
    }, [])
    return (
        <div>
            <h2 className='text-center'>employee Data</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">Zip</th>
                        <th scope="col">Address</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map(obj => {
                            return (
                                <tr key={obj.id}>
                                    <td>{obj.roll}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.gender}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.state}</td>
                                    <td>{obj.city}</td>
                                    <td>{obj.zip}</td>
                                    <td>{obj.addr}</td>
                                    <td>{obj.empnumber}</td>
                                    <td>
                                        <NavLink to={`/user/updateuser/${obj.id}`}><button className='btn btn-outline-warning'>Update</button></NavLink> | |
                                        <NavLink to={`/user/deleteuser/${obj.id}`}><button className='btn btn-outline-danger'>Delete</button></NavLink>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ShowUser;
