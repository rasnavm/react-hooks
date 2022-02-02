import React from 'react';

function Button(handleclick,children) {

  return <div>
      rendering-{children}
      <button name={handleclick}>{children}</button>
  </div>;
}

export default Button;
