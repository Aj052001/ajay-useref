import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function Retailerlist() {
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
                <div className="card">
                <h5 className="card-header">Retailer List</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Business name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div className="dropdown">
                           <Link className="dropdown-item" to="retailerdetails.html"
                                > View Full Details</Link
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div className="dropdown">
                           <Link className="dropdown-item" to="retailerdetails.html"
                                > View Full Details</Link
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div className="dropdown">
                           <Link className="dropdown-item" to="retailerdetails.html"
                                > View Full Details</Link
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div className="dropdown">
                           <Link className="dropdown-item" to="retailerdetails.html"
                                > View Full Details</Link
                              >
                           
                          </div>
                        </td>
                      </tr>
					   <tr>
                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Prabhahar</strong></td>
                        <td>Medi</td>
                        <td>28, balaji street, barani nagar,vannar pettai.</td>
                        <td>6380774800</td>
                        <td>
                          <div className="dropdown">
                            <Link className="dropdown-item" to="retailerdetails.html"
                                > View Full Details</Link
                              >
                           
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
