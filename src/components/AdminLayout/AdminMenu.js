import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const AdminMenu = () => {
  return (
    <Fragment>
      <>
        <div className='d-flex flex-column'>
          <Link to="/">Go Home</Link>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/categories">Categories</Link>
          <Link to="/admin/all-users">Users</Link>
          <Link to="/admin/orders">Order</Link>
        </div>
      </>
    </Fragment>
  );
};

export default AdminMenu;
