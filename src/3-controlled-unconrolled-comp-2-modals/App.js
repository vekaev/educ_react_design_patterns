import React, {useState} from 'react';
import UncontrolledForm from "./UncontrolledForm";
import ControlledModal from "./ControlledModal";

const App = () => {
	const [shouldShowModal, setShouldShowModal] = useState(false);



	return (
		<div>
			<ControlledModal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)}>
				<h1>Hello</h1>
			</ControlledModal>
			<button onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? 'Hide' : 'Show'}</button>
		</div>
	);
};

export default App;
