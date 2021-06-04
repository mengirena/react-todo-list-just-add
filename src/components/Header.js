import React from "react";

//Header is functional component
const Header = (props) => {
  return (
    <div>
    {/*Add title and header style*/}
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
// declare headerStyle variable and assign an object to it
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
