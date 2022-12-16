import React, {useEffect} from 'react';
import CurrentUserLoader from "./CurrentUserLoader";
import UserInfo from "./UserInfo";
import ProductInfo from "./ProductInfo";

import SplitScreen from "../1-layout-comp-1-children-props/SplitScreen";
import UserLoader from "./UserLoader";
import ResourceLoader from "./ResourceLoader";
import DataSource from "./DataSource";
import axios from "axios";

const getServerData = url => async () => {
	const { data } = await axios.get(url)

	return data;
}

const getLocalStorageData = key => () => {
	const data = localStorage.getItem(key)

	return data
}

const Text = ({ message }) => <h1>{message}</h1>

const App = () => {

	useEffect(() => {
		localStorage.setItem('message', 'Hello')
	}, [])

	return (
		<SplitScreen>
			{/*<SplitScreen>*/}
			{/*	<CurrentUserLoader>*/}
			{/*		<UserInfo />*/}
			{/*	</CurrentUserLoader>*/}
			{/*	<UserLoader userId={234}>*/}
			{/*		<UserInfo />*/}
			{/*	</UserLoader>*/}
			{/*</SplitScreen>*/}
			<SplitScreen>
				<ResourceLoader resourceUrl="/users/234" resourceName="user">
					<UserInfo />
				</ResourceLoader>
				<ResourceLoader resourceUrl="/products/1234" resourceName="product">
					<ProductInfo />
				</ResourceLoader>
			</SplitScreen>
			<SplitScreen>
				<DataSource
					getDataFunc={getServerData('/users/234')}
					resourceName="user"
				>
					<UserInfo />
				</DataSource>
				<DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
					<Text />
				</DataSource>
			</SplitScreen>
		</SplitScreen>
	);
};

export default App;
