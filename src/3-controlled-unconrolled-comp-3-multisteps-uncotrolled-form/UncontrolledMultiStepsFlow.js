import React, {useState} from 'react';

const UncontrolledMultiStepsFlow = ({children, onFinish}) => {
	const [data, setData] = useState({});
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const onNextStep = (newData) => {
		const nextStep = currentStepIndex + 1;
		const updatedData = {...data, ...newData};

		if (nextStep < children.length ) {
			setCurrentStepIndex(nextStep)
		} else {
			onFinish(updatedData)
		}

		setData(updatedData);
	}

	const currentChildren = React.Children.toArray(children)[currentStepIndex];


	if (React.isValidElement(currentChildren)) {
		return React.cloneElement(currentChildren, { onNextStep })
	}


	return currentChildren;
};

export default UncontrolledMultiStepsFlow;
