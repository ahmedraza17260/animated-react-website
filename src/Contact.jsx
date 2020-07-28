import React, { useState } from 'react';


const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,

            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Mu Name is ${data.fullname}. My Mobile Number is ${data.phone}. My Email is ${data.email}. Here is what i want to say ${data.msg}. `);
    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US </h1>
            </div>

            <div className=" container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">FullName</label>
                                <input type="text"
                                    name="fullname" value={data.fullname} onChange={InputEvent}
                                    required className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name " />
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">Phone</label>
                                <input type="number"
                                    name="phone" value={data.phone} onChange={InputEvent}
                                    required className="form-control" id="exampleInputEmail1" placeholder="Enter Your Mobile Number " />
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    name="email" value={data.email} onChange={InputEvent}
                                    required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1"> Message </label>
                                <textarea
                                    name="msg" value={data.msg} onChange={InputEvent}
                                    className="form-control" id="exampleInputTextarea1" rows="3" >
                                </textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                                <br />
                            </div>
                        </form>
                        <br /><br />
                    </div>

                </div>
            </div>

        </>
    );
};

export default Contact;
