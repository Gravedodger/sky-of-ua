import {Admin, ListGuesser, Resource} from "react-admin";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";
import LoginPage from "./Login";
import PostIcon from "@mui/icons-material/Book";
import { PostCreate, PostEdit, PostList, PostShow } from "./posts";
import UserIcon from "@mui/icons-material/Group";
import UserList from "./users";
import { Route } from "react-router-dom";
import React from "react";
import { ProfileEdit } from "./profile";

const AdminPage = () => {
	return (
		<Admin
			authProvider={authProvider}
			dashboard={Dashboard}
			loginPage={LoginPage}
			basename="/admin"
			disableTelemetry
			customRoutes={[
				<Route
					key="my-profile"
					path="/my-profile"
					render={() => <ProfileEdit />}
				/>
			]}
		>
			<Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
			<Resource name="users" icon={UserIcon} list={UserList} />
			<Resource name="comments" list={ListGuesser} />
		</Admin>
	)
}

export default AdminPage;
