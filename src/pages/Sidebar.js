import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
    <div className="app-brand demo">
      <Link to="/" className="app-brand-link">
        <img  src="../assets/img/logo1.png" alt=""/>
      </Link>

      <Link to="/" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
        <i className="bx bx-chevron-left bx-sm align-middle"></i>
      </Link>
    </div>

    <div className="menu-inner-shadow"></div>

    <ul className="menu-inner py-1">

      <li className="menu-item ">
        <Link to="/" className="menu-link">
          <i className="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </Link>
      </li>




      <li className="menu-item active" >
        <Link to="javascript:void(0);" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-box"></i>
          <div data-i18n="Layouts">vendor Management</div>
        </Link>

        <ul className="menu-sub">
          <li className="menu-item active">
            <Link to="distributorlist.html" className="menu-link">
              <div data-i18n="Without menu">Distributor List</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/distributorrequest" className="menu-link">
              <div data-i18n="Without navbar">Distributor Request</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/adddis" className="menu-link">
              <div data-i18n="Container">Add distributor</div>
            </Link>
          </li>
          
        </ul>
      </li>
      

      
      
       <li className="menu-item">
        <Link to="#" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-box"></i>
          <div data-i18n="Layouts">Retailer Management</div>
        </Link>

        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/retailerlist" className="menu-link">
              <div data-i18n="Without menu">Retailer List</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/retailerrequest" className="menu-link">
              <div data-i18n="Without navbar">Retailer Request</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/addret" className="menu-link">
              <div data-i18n="Container">Add Retailer</div>
            </Link>
          </li>
          
        </ul>
      </li>
       <li className="menu-item">
        <Link to="#" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-box"></i>
          <div data-i18n="Layouts">Products</div>
        </Link>

       
      </li>

    
       
    </ul>
  </aside>
  )
}
