import React from "react";

function Input({ onKeyDown, placeholder, style }, ref) {
  return (
    <input
      onKeyDown={onKeyDown}
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={style}
    ></input>
  );
}

const ForwardedInput = React.forwardRef(Input);

export default ForwardedInput;
