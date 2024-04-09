import React from 'react';
import { Link } from 'react-router-dom'; 

const DefaultLayout2 = (props) => {
  return (
    <div>
      <div className="header bs1">
        <div className="d-flex justify-content-between">
          <h1>Luxury Watch Store</h1>
          <Link to="/welcome" className='btn1 mt-2 mb-3'>Welcome</Link> 
        </div>
      </div>
      <div className="content">{props.children}</div>
      <div className="footer bs1">
        <div className="d-flex justify-content-between">
          <h1 className="h1footer">Luxury Watch Store</h1>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout2;
