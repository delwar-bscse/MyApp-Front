import React, { Fragment, useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminMenu from './AdminMenu';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../actions/usersAction';
import { FcMenu } from 'react-icons/fc';

const AdminLayout = ({children, description, keywords, author, title}) => {
  const [ menuBtn,setMenuBtn] = useState(false);
  const dispatch = useDispatch();
  const {users} = useSelector(state=>state.users);
  const token = JSON.parse(localStorage.getItem("token"));
  
  useEffect(()=>{
    token && !users && dispatch(loadUsers());
  },[dispatch,token,users]);

  return (
    <Fragment >
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main>
        <div className='container-fluid adminPanel'>
          <button className='adminMenuBtn' onClick={()=>setMenuBtn(!menuBtn)}><FcMenu/></button>
          <h1 className='text-center border-bottom py-2 position-sticky top-0' style={{height:"57px"}}>Admin Panel</h1>
          <div className=''>
            <div className={menuBtn ? "adminMenu adminMenu2" : "adminMenu adminMenu1"}><AdminMenu/></div>
            <div>{children}</div>
          </div>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={900}
            hideProgressBar={true}
            theme="light"
        />
      </main>
    </Fragment>
  );
};

AdminLayout.defaultProps = {
    title: "MyApp-AdminPanel",
    description: "MERN Stack Project",
    keywords: "mern, react, node, express, mongodb",
    author: "M D Hossain"
  };

export default AdminLayout;
