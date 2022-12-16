import React from 'react';
import UncontrolledMultiStepsFlow from "./UncontrolledMultiStepsFlow";

const StepOne = ({ onNextStep }) => {
	return (
		<>
			<h1>Step 1</h1>
			<button onClick={() => onNextStep({name: 'Bob'})}>Next</button>
		</>
	)
}
const StepTwo = ({ onNextStep }) => {
	return (
		<>
			<h1>Step 2</h1>
			<button onClick={() => onNextStep({age: 10})}>Next</button>
		</>
	)
}
const StepThree = ({ onNextStep }) => {
	return (
		<>
			<h1>Step 3</h1>
			<button onClick={() => onNextStep({hairColor: 'red'})}>Finish</button>
		</>
	)
}

const App = () => {
	return (
		<UncontrolledMultiStepsFlow onFinish={console.dir}>
			<StepOne/>
			<StepTwo/>
			<StepThree/>
		</UncontrolledMultiStepsFlow>
	);
};

export default App;
