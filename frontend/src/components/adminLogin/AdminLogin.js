import React from 'react';
import './AdminLogin.css';
import UserIcn from './../../assets/icons/user.png';

import  CreateIcon from '@mui/icons-material/Create';

const AdminLogin = () => {
	return (
		<div className="admin-login-container">
			<a href="http://localhost:1337/admin"
			   target="_blank"
			   rel="noopener noreferrer"
			   className="tooltip"
			>
				<img src={UserIcn} className="admin-login-icon" alt="admin login" />
				<span className="tooltip-text">
					First run from the backend folder => yarn dev
				</span>
			</a>

			<a href="/ProjectsAdminPage" target="_blank">
				<CreateIcon marginTop="10px" />
			</a>
		</div>
	)
};

export default AdminLogin;
