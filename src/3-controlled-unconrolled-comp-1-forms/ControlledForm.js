import React, {useEffect, useState} from 'react';

const ControlledForm = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	const [hairColor, setHairColor] = useState('');

	useEffect(() => {
		console.log(name, age, hairColor);
	}, [name, age, hairColor]);

	const handleSubmit = () => {};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={name}
				onChange={({target: { value}}) => setName(value)}
			/>
			<input
				type="text"
				name="age"
				placeholder="Age"
				value={age}
				onChange={({target: { value}}) => setAge(Number(value))}
			/>
			<input
				type="text"
				name="hairColor"
				placeholder="Hair Color"
				value={hairColor}
				onChange={({target: { value}}) => setHairColor(value)}
			/>
			<button>Submit</button>
		</form>
	);
};

export default ControlledForm;
