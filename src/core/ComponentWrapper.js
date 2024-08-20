import React, { useContext } from "react";

function ComponentWrapper(Component) {
  return ({ sx = ({ theme }) => {}, style, ...props }) => {
    const mergedStyles = {
      ...sx({}),
      ...style,
    };

    return <Component {...props} style={mergedStyles} />;
  };
}

export default ComponentWrapper;
