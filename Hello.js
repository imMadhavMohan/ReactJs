import React from "react";

const Hello = () => {
  // return (<div> 
  //   <h1>Hello Mohan Saab!</h1>
  // </div>)

  //  Or we can try this also
  return React.createElement("div", {id:'hello', className:'dummy'}, React.createElement('h1', null, 'Hello Mohan Saab'));
};

export default Hello;
