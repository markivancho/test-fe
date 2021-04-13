import React from "react";
import MaskedInput from "react-input-mask";

import Input from "../Input";

const Masked = ({ ...props }) => {
  const { onChange } = props;

  return (
    <MaskedInput
      {...props}
      alwaysShowMask
      onChange={(e) => {
        e.persist();
        onChange(e.target.value);
      }}
    >
      <Input />
    </MaskedInput>
  );
};

export default Masked;
