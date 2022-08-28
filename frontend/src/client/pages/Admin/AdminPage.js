import React from 'react';
import './AdminPage.css';
import ProjectsImg from '../../../assets/icons/project.png';
import ReportsImg from '../../../assets/icons/report.png';

const AdminPage = () => {
	return (
		<main className="admin-page">
			<div className="main-container">
				<h1 className="admin-page-title">ADMIN PAGE</h1>
				<div className="selection-wrap">
					<a href="/ProjectManagement" className="selection-item">
						<img src={ProjectsImg} alt="projects" className="selection-item-icn" />
						<h3 className="selection-item-txt">PROJECTS</h3>
					</a>
					<a href="/ReportManagement" className="selection-item">
						<img src={ReportsImg} alt="reports" className="selection-item-icn" />
						<h3 className="selection-item-txt reports">REPORTS</h3>
					</a>
				</div>
			</div>
		</main>
	)
}

export default AdminPage;
