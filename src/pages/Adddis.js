import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Adddis() {
  const [distributor, setDistributor] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    pinCode:"",
    city:"",
    area:"",
    state:"",
    businessName:"",
    companyName:"",
    password: "",
    confirmPassword: "",
    distributorCode:"",
    distributorType:""
  });
  console.log(distributor)

  let name ,value;
  function handle(e) {
   
    name = e.target.name;
    value = e.target.value;
    setDistributor({ ...distributor, [name]: value });
  }

    // //data send in backend by using async function postData
    // const postData = async (e) => {
    //   e.preventDefault();
  
    //   //object destructing
    //   const {
    //     firstName,
    //     lastName,
    //     email,
    //     gender,
    //     phone,
    //     age,
    //     password,
    //     cpassword,
    //   } = user;
  
    //   const res = await fetch("/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       firstName,
    //       lastName,
    //       email,
    //       gender,
    //       phone,
    //       age,
    //       password,
    //       cpassword,
    //     }),
    //   });
  
    //   const data = await res.json();
  
    //   if (res.status === 422 || !data) {
    //     window.alert("Invalid Registration");
    //     console.log("Invalid Registration");
    //   } else {
    //     window.alert("Registration Successfully");
    //     console.log("Registration Successfully");
    //     history.push("/login");
    //   }
    // };
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card mb-12">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">ADD Distributor Details</h5>
                      <small className="text-muted float-end">
                        Default label
                      </small>
                    </div>

                    <hr className="my-0" />

                    <div className="card-body">
                      <form
                        id="formAccountSettings"
                        method="POST"
                        onsubmit="return false"
                      >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label
                              for="firstName"
                              className="form-label float-start"
                            >
                              First Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={distributor.firstName}
                              onChange={handle}
                              placeholder="Enter first name"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="lastName"
                              className="form-label float-start"
                            >
                              Last Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              id="lastName"
                              placeholder="Enter last name"
                              value={distributor.lastName}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="phoneNumber"
                            >
                              Phone Number
                            </label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">IN (+91)</span>
                              <input
                                className="form-control"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="202 555 0111"
                                value={distributor.phoneNumber}
                                onChange={handle}

                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="email"
                              className="form-label float-start"
                            >
                              E-mail
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              placeholder="john.doe@example.com"
                              value={distributor.email}
                              onChange={handle}
                            />
                          </div>
                        
                          <div className="mb-3 col-md-6">
                            <label
                              for="pinCode"
                              className="form-label float-start"
                            >
                              Pin Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="pinCode"
                              name="pinCode"
                              placeholder="231465"
                              maxlength="6"
                              value={distributor.pinCode}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="city"
                              className="form-label float-start"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              name="city"
                              placeholder="City"
                              value={distributor.city}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="area"
                              className="form-label float-start"
                            >
                              Area
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="area"
                              name="area"
                              placeholder="Enter your business area"
                              value={distributor.area}
                              onChange={handle}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              for="state"
                              className="form-label float-start"
                            >
                              select state
                            </label>
                            <select
                              id="state"
                              name="state"
                              className="select2 form-select"
                              onChange={handle}
                            >
                              <option value="">Select </option>
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujrat">Gujrat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                          </div>
                            <div className="mb-3 col-md-6">
                            <label
                              for="businessName"
                              className="form-label float-start"
                            >
                              Business name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="businessName"
                              name="businessName"
                              value={distributor.businessName}
                              onChange={handle}
                              placeholder="Enter business name"
                            />
                          </div>
                            <div className="mb-3 col-md-6">
                            <label
                              for="companyName"
                              className="form-label float-start"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="companyName"
                              name="companyName"
                              value={distributor.companyName}
                              onChange={handle}
                              placeholder="Enter business name"
                            />
                          </div>

                        
                          <div className="mb-3 col-md-6">
                            <label
                              for="password"
                              className="form-label float-start"
                            >
                              password
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="password"
                              name="password"
                              value={distributor.password}
                              onChange={handle}
                              placeholder="12123323423"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="confirmPassword"
                              className="form-label float-start"
                            >
                              Confirm Password
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="confirmPassword"
                              name="confirmPassword"
                              value={distributor.confirmPassword}
                              onChange={handle}
                              placeholder="12123323423"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="distributorCode"
                              className="form-label float-start"
                            >
                             Distributor Code
                              
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="distributorCode"
                              name="distributorCode"
                              placeholder="121233"
                              value={distributor.distributorCode}
                              onChange={handle}
                            />
                          </div>
                        
                          <div className="mb-3 col-md-6">
                            <label
                              for="distributorType"
                              className="form-label float-start"
                            >
                             Distributor Type
                            </label>
                            <select
                              id="distributorType"
                              name="distributorType"
                              className="select2 form-select"
                              onChange={handle}
                            >
                              <option value="">Select </option>
                              <option  value="Generic Distributor">Generic Distributor</option>
                              <option  value="OTC Distributor">OTC Distributor</option>
                              <option  value="Branded Distributor">Branded Distributor</option>
                             
                            </select>
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            value="Register"
                            //  onClick={postData}
                            className="btn btn-primary me-2"
                          >
                            Save
                          </button>
                          <button
                            type="reset"
                            className="btn btn-outline-secondary"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </>
  );
}
