import React, {useEffect, useState} from 'react';
import axios from "axios";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
	const [state, setState] = useState(null);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(resourceUrl);

			setState(data)
		})();
	}, [resourceUrl])

	return (
		<div>
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { [resourceName]: state })
				}

				return child
			})}
		</div>
	);
};


export default ResourceLoader;
