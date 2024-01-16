import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'


const AddUser = () => {


    function saveData(data) {
        console.log(data);
        axios.post("http://localhost:8080/employee", data);
        alert("Data Added Successfully")
    }

    const { register, handleSubmit } = useForm();
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Add User Details</h1>
            <form onSubmit={handleSubmit(saveData)}>


                <label htmlFor='en' className='mb-2'>employee Number</label>
                <input type='number' id="en" className='form-control' {...register("empnumber")} />
                <br />


                <label htmlFor='name' className='mb-2'>Enter Full Name</label>
                <input type='text' id="name" className='form-control' {...register("name")} />
                <br />


                <label htmlFor='gender' className='me-5'>Select Gender</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="male" value="male" {...register("gender")} />
                    <label class="form-check-label" htmlFor="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="female" value="female" {...register("gender")} />
                    <label class="form-check-label" htmlFor="female">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="other" value="other" {...register("gender")} />
                    <label class="form-check-label" htmlFor="other">Other</label>
                </div>
                <br />
                <br />
                <label htmlFor='email' className='mb-2'>Enter Your Email</label>
                <input type='email' id="email" className='form-control' {...register("email")} />
                <br />

                <div className='row g-3'>
                    <div class="col-md-4">
                        <label htmlFor="state" class="form-label">State</label>
                        <select id="state" class="form-select" {...register("state")}>
                            <option selected value="">Choose...</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="MadhyaPradesh">MadhyaPradesh</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="UP">UP</option>
                            <option value="Rajasthan">Rajasthan</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label htmlFor='city' class="form-label">City</label>
                        <input type="text" class="form-control" id="city" {...register("city")} />
                    </div>

                    <div class="col-md-2">
                        <label htmlFor="zip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="zip" {...register("zip")} />
                    </div>
                </div>
                <br />

                <div class="col-12">
                    <label htmlFor="addr" class="form-label">Address</label>
                    <input type="text" class="form-control" id="addr" placeholder="1234 Main St" {...register("addr")} />
                </div>
                <br />

                <button type='submit' className='btn btn-outline-success col-3 offset-2'>ADD USER</button>
                <button type='reset' className='btn btn-outline-warning col-3 offset-1'>CLEAR FIELD</button>
            </form>
        </div>
    )
}


export default AddUser
