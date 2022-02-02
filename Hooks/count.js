import React from 'react';

function Count(text,count) {
   console.group(`rendering-${text}`);
  return <div>{text}-{count}</div>;
}

export default Count;
