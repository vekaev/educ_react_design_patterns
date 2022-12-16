import React from 'react';
import ReactDOM from 'react-dom';

//Layout components
//Our components shouldn't know where they're being displayed.

// import App fro m './1-layout-comp-1-children-props/App';
// import App from './1-layout-comp-2-list-component/App';
// import App from './1-layout-comp-3-modal/App';

// ------------------------------------------------------------

//Container components
//Our components shouldn't know where their data is coming from.

// import App from './2-container-comp-users/App';

// ------------------------------------------------------------

// Controlled and Uncontrolled Components
//

// import App from './3-controlled-unconrolled-comp-1-forms/App';
// import App from './3-controlled-unconrolled-comp-2-modals/App';
import App from './3-controlled-unconrolled-comp-3-multisteps-uncotrolled-form/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
