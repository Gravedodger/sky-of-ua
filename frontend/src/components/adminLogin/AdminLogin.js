import React from 'react';
import './AdminLogin.css';
import UserIcn from './../../assets/icons/user.png';

const AdminLogin = () => {
	return (
		<div className="admin-login-container">
			<a href="http://localhost:1337/admin" target="_blank" rel="noopener noreferrer" >
				<img src={UserIcn} className="admin-login-icon" alt="admin login" />
			</a>
		</div>
	)
};

export default AdminLogin;
