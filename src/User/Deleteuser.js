import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
const DeleteUser = () => {


    const [employee, setemployee] = useState({})
    const navigate = useNavigate();
    const { employeeId } = useParams();
    async function fetchemployeeData() {
        const result = await axios.get(`http://localhost:8080/employee/${employeeId}`)
        setemployee(result.data)
    }


    useEffect(() => {
        fetchemployeeData()
    }, [])


    function deleteemployee() {
        axios.delete(`http://localhost:8080/employee/${employeeId}`);
        navigate('/showuser')
    }


    return (
        <div>
            <h2 className='text-center mt-5'>Delete employeedata Confirmation</h2>

            <form onSubmit={() => deleteemployee()}>
                <h3 className='text-center'>
                    Do You Really Want to Delete <span style={{ color: 'red' }}>{employee.id} - {employee.name}</span> Record
                </h3>
                <center>
                    <input type='submit' value='YES' className='btn btn-outline-danger me-3 mt-5 col-3' />
                    <NavLink to={'/showuser'}><button type='button' className='btn btn-outline-warning col-3 mt-5'>NO</button></NavLink>
                </center>
            </form>
        </div>
    )
}
export default DeleteUser;
