import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserLoader = ({ userId, children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(`/users/${userId}`);

			setUser(data)
		})();
	}, [userId])

	return (
		<div>
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { user })
				}

				return child
			})}
		</div>
	);
};

export default UserLoader;
