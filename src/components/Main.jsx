import React from 'react';

const Main = ( {children} ) => {
  return (
    <div className="Main">
      <div className="Main-container">
        {children}
      </div>
    </div>
  )
};

export default Main;