import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function Retailerdetailsr() {
  return (
    <>
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        

      <Sidebar/>
        

        
        <div className="layout-page">
          

          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <Link className="nav-item nav-link px-0 me-xl-4" to="javascript:void(0)">
                <i className="bx bx-menu bx-sm"></i>
              </Link>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>
              

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                
                <li className="nav-item lh-1 me-3">
                  <a
                    className="github-button"
                    to="https://github.com/themeselection/sneat-html-admin-template-free"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >Star</a
                  >
                </li>

                
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <Link className="nav-link dropdown-toggle hide-arrow" to="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <i className="bx bx-cog me-2"></i>
                        <span className="align-middle">Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="auth-login-basic.html">
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">Log Out</span>
                      </Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </nav>

          

          
          <div className="content-wrapper">
            

            <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
      
                  <div className="card mb-12">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Retailer Details</h5>
                     
                    </div>
                   
                   
                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label for="firstName" className="form-label">Owner Name</label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value="John"
                              autofocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="lastName" className="form-label">Business Name</label>
                            <input className="form-control" type="text" name="lastName" id="lastName" value="Doe" />
                          </div>
						    <div className="mb-3 col-md-6">
                            <label for="organization" className="form-label">Business Type</label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              name="organization"
                              value="ThemeSelection"
                            />
                          </div>
						  <div className="mb-3 col-md-6">
                            <label className="form-label" for="phoneNumber">Phone Number</label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">IN (+91)</span>
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                placeholder="202 555 0111"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="email" className="form-label">E-mail</label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value="john.doe@example.com"
                              placeholder="john.doe@example.com"
                            />
                          </div>
                        
                           <div className="mb-3 col-md-6">
                            <label for="zipCode" className="form-label">Postal Code</label>
                            <input
                              type="text"
                              className="form-control"
                              id="zipCode"
                              name="zipCode"
                              placeholder="231465"
                              maxlength="6"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="address" className="form-label">City</label>
                            <input type="text" className="form-control" id="City" name="City" placeholder="City" />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="state" className="form-label">Area</label>
                            <input className="form-control" type="text" id="Area" name="Area" placeholder="Area" />
                          </div>
                         
                         <div className="mb-3 col-md-6">
                            <label for="timeZones" className="form-label">Drug Licence No</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="12123323423" />
                          </div>
                          <div className="mb-3 col-md-6">
                             <label for="timeZones" className="form-label">Drug Licence img</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="view/img.jpg" />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="timeZones" className="form-label">Gst No</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="12123323423" />
                          </div>
                          <div className="mb-3 col-md-6">
                             <label for="timeZones" className="form-label">Gst img</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="view/img.jpg" />
                          </div>
						   <div className="mb-3 col-md-6">
                            <label for="timeZones" className="form-label">Pan No</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="12123323423" />
                          </div>
                          <div className="mb-3 col-md-6">
                             <label for="timeZones" className="form-label">Pan img</label>
                            <input className="form-control" type="text" id="gst" name="gst" placeholder="view/img.jpg" />
                          </div>
                        </div>
                        <div className="mt-2">
                         
                        </div>
                      </form>
                    </div>
                    
                  </div>
                 
                
                
              </div>
           
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  , by
                  <Link to="#" target="_blank" className="footer-link fw-bolder">Meddaily</Link>
                </div>
                
              </div>
            </footer>
         

            <div className="content-backdrop fade"></div>
          </div>
       
        </div>
      
      </div>

     
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    </div>
    </>
  )
}
