import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true, value: './Assets/Home.png' },
  { name: 'Cars', href: '/cars', current: false, value: './Assets/Administrator.png' }
]

const NavigationBar = () => {
  return (
      <div className="py-1 sidebar d-flex flex-column align-items-center" >
        <div className="logo-admin"></div>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({isActive}) => {
                return (
                  (isActive ? 'sidebar-active':'')
                )
              }}
            >
              <img className="sidebar-item" src={item.value} alt=" " />
            </NavLink>
          ))}
      </div>
  );
};
export default NavigationBar;
